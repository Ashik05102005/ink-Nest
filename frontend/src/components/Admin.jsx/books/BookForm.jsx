import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

const initialForm = {
  title: "",
  author: "",
  publisher: "",
  category: "",
  price: "",
  stock: "",
  isbn: "",
  pages: "",
  language: "English",
  format: "Paperback",
  image: "",
  description: "",
  releaseDate: "",
  edition: "",
  dimensions: "",
  previewUrl: "",
  featured: false,
  trending: false,
  rating: ""
};

function BookForm({ showModal,
  handleClose,
  book = null,
  onSubmit,
  isLoading = false, }) {


  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      pages: Number(formData.pages),
      rating: Number(formData.rating)
    };

    onSubmit(bookData)
  }

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">

      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 border-b-gray-200 py-4">

          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {/* {book ? "Update Book" : "Add New Book"} */}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {/* {book
                ? "Update the book information"
                : "Add a new book to your store"} */}
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
          >
            <IoClose size={22} />
          </button>

        </div>

        {/* //form  */}
        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto p-6 hide-scrollbar "
        >
          {/* basic info  */}
          <div className="mb-6">
            <h3 className="mb-4 text-base font-semibold text-gray-800">
              Basic Information
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Book Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter book title"
                  required
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 outline-none focus:border-[#1D7A46]"
                />
              </div>


              {/* Author */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Author
                </label>

                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Enter author"
                  required
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 outline-none focus:border-[#1D7A46]"
                />
              </div>


              {/* Publisher */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Publisher
                </label>

                <input
                  type="text"
                  name="publisher"
                  value={formData.publisher}
                  onChange={handleChange}
                  placeholder="Enter publisher"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 outline-none focus:border-[#1D7A46]"
                />
              </div>


              {/* Category */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 outline-none focus:border-[#1D7A46]"
                >
                  <option value="">Select category</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Self Help">Self Help</option>
                  <option value="Biography">Biography</option>
                  <option value="Business">Business</option>
                  <option value="Science">Science</option>
                  <option value="Technology">Technology</option>
                </select>
              </div>


              {/* ISBN */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  ISBN
                </label>

                <input
                  type="text"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleChange}
                  placeholder="Enter ISBN"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 outline-none focus:border-[#1D7A46]"
                />
              </div>
            </div>
          </div>

          {/* inventory & details */}
          <div className="mb-6">

            <h3 className="mb-4 text-base font-semibold text-gray-800">
              Inventory & Details
            </h3>

            <div className="grid gap-4 md:grid-cols-2">

              {/* Price */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Price (₹)
                </label>

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="299"
                  min="0"
                  required
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 outline-none focus:border-[#1D7A46]"
                />
              </div>


              {/* Stock */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Stock
                </label>

                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  placeholder="20"
                  min="0"
                  required
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 outline-none focus:border-[#1D7A46]"
                />
              </div>


              {/* Pages */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Pages
                </label>

                <input
                  type="number"
                  name="pages"
                  value={formData.pages}
                  onChange={handleChange}
                  placeholder="300"
                  min="0"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 outline-none focus:border-[#1D7A46]"
                />
              </div>


              {/* Format */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Format
                </label>

                <select
                  name="format"
                  value={formData.format}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 outline-none focus:border-[#1D7A46]"
                >
                  <option value="Paperback">Paperback</option>
                  <option value="Hardcover">Hardcover</option>
                  <option value="eBook">eBook</option>
                </select>
              </div>


              {/* Language */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Language
                </label>

                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 outline-none focus:border-[#1D7A46]"
                >
                  <option value="English">English</option>
                  <option value="Malayalam">Malayalam</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>


              {/* Release Date */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Release Date
                </label>

                <input
                  type="date"
                  name="releaseDate"
                  value={formData.releaseDate}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 outline-none focus:border-[#1D7A46]"
                />
              </div>
              {/* Rating */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Rating
                </label>

                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  min="0"
                  max="0"
                  step="0.1"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 outline-none focus:border-[#1D7A46]"
                />
              </div>

            </div>
          </div>

          {/* Description */}
          <div className="mb-6">

            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Enter book description..."
              className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 outline-none focus:border-[#1D7A46]"
            />

          </div>

          {/* Image */}
          <div className="mb-6">

            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Book Cover URL
            </label>

            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 outline-none focus:border-[#1D7A46]"
            />

            {formData.image && (
              <img
                src={formData.image}
                alt="Book preview"
                className="mt-3 h-32 w-24 rounded-lg object-cover shadow"
              />
            )}

          </div>
          {/* footer  */}
          <div className="flex justify-end gap-3 border-t border-t-gray-200 bg-gray-50 px-6 py-4">

            <button
              type="button"
              onClick={handleClose}
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="rounded-lg bg-[#1D7A46] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#176638] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading
                ? "Saving..."
                : book
                  ? "Update Book"
                  : "Add Book"}
            </button>

          </div>
        </form>




      </div>
    </div>
  )
}

export default BookForm