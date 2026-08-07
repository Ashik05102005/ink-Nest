import React from 'react'
import Select from "react-select"

function SortDropdown({sortBy , setSortBy}) {

        const options = [
            {
                value: "default",
                label: "Sort : default"
            },
            {
                value: "priceLow",
                label: "Price: Low to High"
            },
            {
                value: "priceHigh",
                label: "Price: High to Low"
            },
            {
                value: "ratingHigh",
                label: "Highest Rated"
            },
            {
                value: "nameAZ",
                label: "Name: A to Z"
            },
            {
                value: "nameZA",
                label: "Name: Z to A"
            }
        ];
        const selectedOption = options.find(
            option=>option.value === sortBy
        )
  return (
    <div>
        <Select 
            options={options}
            value={selectedOption}
            onChange={(option)=>setSortBy(option.value)}
            placeholder = "Sort By"
            styles={{
                control: (base) => ({
                    ...base,
                    borderRadius: "10px",
                    padding: "3px",
                    borderColor: "#d1d5db",
                    boxShadow: "none"
                }),

                option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isSelected
                        ? "#1D7A46"
                        : state.isFocused
                        ? "#1D7A4615"
                        : "white",
                    color: state.isSelected
                        ? "white"
                        : "#374151"
                })
            }}
            />
    </div>
  )
}

export default SortDropdown