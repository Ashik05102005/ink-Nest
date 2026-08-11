import React,{useState} from 'react'
import NavBar from '../../components/Home/NavBar'
import { useBooks } from '../../hooks/useBooks'
import ProductSBookCard from '../../components/Cards/ProductSBookCard';
import FilterSidebar from '../../components/Products/FilterSidebar';
import ProductGrid from '../../components/Products/productGrid';
import SearchComponent from '../../components/Products/SearchComponent';
import SortDropdown from '../../components/Products/SortDropdown';

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
    //to sort
    const sortedBooks = [...filteredBooks].sort((a,b)=>{
        if(sortBy==="priceLow"){
            return a.price - b.price
        }
        if(sortBy==="priceHigh"){
            return b.price - a.price 
        }
         if (sortBy === "ratingHigh") {
        return b.rating - a.rating;
        }

        if (sortBy === "nameAZ") {
            return a.title.localeCompare(b.title);
        }

        if (sortBy === "nameZA") {
            return b.title.localeCompare(a.title);
        }

        return 0;
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
            <main className='lg:pl-80 w-full flex flex-col gap-3'>
                <div>
                    <SearchComponent
                    search ={ search }
                    setSearch = { setSearch }
                    />
                    <div className='w-full flex  justify-end px-6'>
                        <SortDropdown 
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        />
                    </div>
                    
                </div>
                 
                 <ProductGrid books={sortedBooks}/>
            </main>
        </div>
        
    </div>
  )
}

export default Products