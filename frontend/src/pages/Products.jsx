import React,{useState} from 'react'
import NavBar from '../components/Home/NavBar'
import { useBooks } from '../hooks/useBooks'
import ProductSBookCard from '../components/Cards/ProductSBookCard';
import FilterSidebar from '../components/Products/FilterSidebar';
import ProductGrid from '../components/Products/productGrid';
import SearchComponent from '../components/Products/SearchComponent';

function Products() {

    const [selectedCatagory , setSelectedCatagory] = useState("All");
    const [maxPrice ,setMaxPrice] =useState(1000);
    const [search,setSearch] = useState("");
    const [sortBy , setSortBy] = useState("default");


    const {data:books , isLoading , error} = useBooks();
    if(isLoading) return<h1>Loading..</h1>
    if(error) return<h1>error..</h1>
    
    const filteredBooks = books.filter(book=>{
        //filter by category
        const categorymatch = selectedCatagory === "All" ||
                              book.category === selectedCatagory;

        //filter by price                      
        const priceMatch = book.price <= maxPrice;

        //filter by search input
        const searchMatch = 
              book.title.toLowerCase().includes(search.toLowerCase())||
              book.author.toLowerCase().includes(search.toLowerCase());          


       return (categorymatch&&priceMatch&&searchMatch)
    
    })
    // console.log(maxPrice)
  return (
    <div className='bg-[#F8F6F1] min-h-screen '>
        <NavBar />
        <div className="flex pt-25 ">
            <aside className='hidden lg:block min-w-72  m-2 h-fit fixed '>
                <FilterSidebar 
                    selectedCatagory={selectedCatagory}
                    setSelectedCatagory = {setSelectedCatagory}
                    maxPrice = {maxPrice}
                    setMaxPrice = {setMaxPrice}
                />
            </aside>
            <main className='lg:pl-80 w-full'>
                 <SearchComponent
                 search ={ search }
                 setSearch = { setSearch }
                 />
                 <ProductGrid books={filteredBooks}/>
            </main>
        </div>
        
    </div>
  )
}

export default Products