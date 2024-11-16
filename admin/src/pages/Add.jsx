import React, { useState, useEffect } from 'react';
import axios from 'axios';
import assets from '../assets/assets';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({token}) => {
    const [image1, setImage1] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("price", price);
            if (image1) formData.append("image1", image1);

            const response = await axios.post(backendUrl + "/api/product/add", formData, {
                headers: {
                    token
                },
            });

            console.log(response.data);
            // alert("Product added successfully!");

            if(response.data.success)
            {
              setName("");
              setImage1(false);
              setPrice("");
              alert("Product added successfully!");
            }
            else
            {
              toast.error(response.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        return () => {
            if (image1) {
                URL.revokeObjectURL(image1);
            }
        };
    }, [image1]);

    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
            <div>
                <p>Upload image</p>
                <div>
                    <label htmlFor="image1">
                        <img
                            src={!image1 ? assets.upload : URL.createObjectURL(image1)}
                            alt="Upload preview"
                            className="w-32 h-32 object-cover"
                        />
                        <input
                            type="file"
                            id="image1"
                            hidden
                            onChange={(e) => setImage1(e.target.files[0])}
                        />
                    </label>
                </div>
            </div>

            <div className="w-full">
                <p className="mb-2">Dish name: </p>
                <input
                    type="text"
                    placeholder="Type"
                    className="w-full max-w-[500px] px-3 py-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <p>Price: </p>
                <input
                    type="number"
                    placeholder="25"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
            </div>

            <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
                ADD
            </button>
        </form>
    );
};

export default Add;
