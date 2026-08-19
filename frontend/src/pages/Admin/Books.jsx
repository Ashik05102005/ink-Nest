import React, { useMemo, useState } from 'react'
import BooksStats from '../../components/Admin.jsx/books/BooksStats'
import { CiSearch } from "react-icons/ci";
import BookCategories from '../../components/Admin.jsx/books/BookCategories';
import BookStockStatus from '../../components/Admin.jsx/books/BookStockStatus';
import { IoMdAdd } from "react-icons/io";
import   { useBooks }  from '../../hooks/useBooks'
import BookList from '../../components/Admin.jsx/books/BookList';
import BooksSort from '../../components/Admin.jsx/books/BooksSort';
import BookForm from '../../components/Admin.jsx/books/BookForm';
import { useAddBooks } from '../../hooks/Admin/useAddBooks';
import { useUpdateBooks } from '../../hooks/Admin/useUpadteBooks';



function Books() {
  const [page , setPage] = useState(1);
  const [search , setSearch] =useState('')
  const [category, setCategory] = useState("All Categories");
  const [status , setStatus] = useState("all");
  const [sort, setSort] = useState("Newest");
  const [showModal , setShowModal] = useState(false);
  const [selectedBooks , setSelectedBooks] = useState(null);


  const {data:books,isLoading,error} = useBooks();

  const addBooks = useAddBooks();
  const updateBookMutation = useUpdateBooks();
  
  //filtered books 
  const filteredBooks = useMemo(()=>{
    setPage(1)
    if(books){
      // 
    let result =[...books]
    
    //search
    if(search.trim() !== ""){
      result = result.filter((book)=>
        book.title?.toLowerCase().includes(search.toLowerCase())||
      book.author?.toLowerCase().includes(search.toLowerCase())||
      book.isbn?.toLowerCase().includes(search.toLowerCase())
    )
    }
    
    //category 
    
    if(category != "All Categories"){
      result=result.filter((book)=>book.category?.toLowerCase()===category.toLowerCase())
    }
    
    //status 
    if(status !== "all"){
      result = result.filter((book)=> {
        const stock = Number(book.stock || 0);
        
        if(status === "In Stock"){
          return stock>20
        }
        
        if(status === "Low Stock"){
          return stock > 0 && stock <= 20 ;
        }
        
        if(status ==="Out of Stock"){
          return stock === 0 ;
        }
        return true;
      })
    }

    switch(sort){ 
      case "newest": 
          result.sort((a,b)=>new Date(b.releaseDate || 0) - new Date(a.releaseDate || 0));
          break;
      
      case "oldest" : 
          result.sort((a,b)=>new Date(a.releaseDate || 0) - new Date(b.releaseDate || 0));
          break;

      case "price-low" : 
          result.sort((a,b)=>Number(a.price || 0) - Number(b.price || 0));
          break ;
      case "price-high" : 
          result.sort((a,b)=>Number(a.price || 0 )-Number(b.price || 0));
          break;
      case "name" : 
          result.sort((a,b)=>a.title.localeCompare(b.title));
          break;
      case "stock-low" :
          result.sort((a,b)=>(a.stock||0)-(b.stock||0));
          break;
      default : break;
      
    }

    return result
    }
    
    
  },[books,search,category,status,sort]);


  const handleEditBook = (book)=>{
    // console.log(book)
    setSelectedBooks(book);
    setShowModal(true);
  }


  const handleAddBook = ()=>{
    setShowModal(true);
    setSelectedBooks(null);
  }
  const handleClose = ()=>{
    setShowModal(false);
    setSelectedBooks(null);
  }


  const handleSubmit = (data)=>{
    if(selectedBooks){
      //update
      updateBookMutation.mutate({
        id : selectedBooks.id,
        data : data
      },
    {
      onSuccess : ()=>{
        setShowModal(false);
        setSelectedBooks(null);
      },
      onError : (error)=>{
        console.error("fails" , error);
        
      }
    })
    }
    else{
      // add new 
      addBooks.mutate(data,{
      onSuccess : ()=>{
        console.log("succedd")
        setShowModal(false);
      }
    })
    }
    
  }
  
  
  if(isLoading) return <h1>Loading..</h1>
  const limit = 8 ;
  const startingindex =( page-1 )* limit;
  const endingIndex = page*limit;
  const totalpages = Math.ceil((filteredBooks.length)/limit);
  // console.log(books)


  return (
    <div className=''>
      <BooksStats books={books}/>
      <div className='px-3 lg:flex flex-col my-3 gap-4 lg:items-center lg:justify-between md:flex-row '>
        <div className=' flex   justify-between w-full '>
          {/* search Input  */}

          <div className=' relative w-full lg:max-w-[280px]'>
            <input
              onChange={(e)=>setSearch(e.target.value)}
              placeholder='Search books or author'
              className=' h-10 w-full rounded-lg border border-gray-200 bg-white px-3 pr-10
              text-sm text-gray-700 outline-none transition placeholder:text-gray-400
              focus:border-[#1D7A46] focus:ring-1 focus:ring-[#1D7A46]/20'>
            </input>
            <div className=' absolute top-0 h-full flex items-center right-0 pr-2 text-xl'>
              <CiSearch />
            </div>
          </div>
          <div className='flex gap-2'>
              <BookCategories category={category} setCategory={setCategory} />
              <BookStockStatus status={status} setStatus={setStatus} />
              <BooksSort sort={sort} setSort={setSort} />
          </div>
          
        </div>
        <div className='min-w-fit '>
          <button 
          onClick={handleAddBook}
          className='bg-[#1D7A46] py-2 px-4 text-white rounded-lg  flex gap-2 items-center'>
            <IoMdAdd />
            <span>Add New Book</span>
          </button>
        </div>
      </div>
        <BookList books={filteredBooks.filter(book=> !book.deleted ? book:null).slice(startingindex,startingindex+limit)} onEdit={handleEditBook}/>
        <BookForm  
          showModal={showModal} 
          handleClose={handleClose}
          onSubmit ={handleSubmit}
          book={selectedBooks}
          isLoading={addBooks.isPending || updateBookMutation.isPending}/>
        <div className=' min-h-10 mt-3 flex justify-end px-4 '>
          <button className='border px-4 border-gray-300 rounded-l text-[#1D7A46] disabled:text-gray-400'
                  disabled={page===1}
                  onClick={()=>setPage(page=>page-1)}
                  >Previous</button>
          <span className='border px-4 border-gray-300 flex items-center '>{page}</span>
          <button 
          disabled={page===totalpages}
          onClick={()=>setPage(page=>page+1)}
          className='border px-4 border-gray-300 rounded-r text-[#1D7A46] disabled:text-gray-400'>Next</button>
      </div>
    </div>
  )
}

export default Books