import React, { use } from 'react';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Addart = () => {

    const { user } = use(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            title: e.target.name.value,
            category: e.target.category.value,
            description: e.target.description.value,
            image: e.target.thumbnail.value,
            dimensions: e.target.dimension.value,
            price: e.target.price.value,
            medium: e.target.medium.value,
            artistName: e.target.artistName.value,
            artistPhoto: e.target.artistImage.value,
            createdAt: new Date(),
            Favourites: 0,
            likes: 0,
            views: 0,
            artistEmail: user?.email
        }
        fetch('https://artify-server-mocha.vercel.app/artworks', {
            method: 'POST',
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/all-art');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your art has been added",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='p-10'>
            <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
                <div className="card-body p-6 relative">
                    <h2 className="text-2xl font-bold text-center mb-6">Add New Art</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Field */}
                        <div>
                            <label className="label font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Enter name"
                            />
                        </div>

                        {/* Category Dropdown */}
                        <div>
                            <label className="label font-medium">Category</label>
                            <select
                                defaultValue={""}
                                name="category"
                                required
                                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                            >
                                <option value="" disabled>
                                    Select category
                                </option>
                                <option value="Landscape">Landscape</option>
                                <option value="Abstract">Abstract</option>
                                <option value="Digital Art">Digital Art</option>
                                <option value="Golden Sunset">Golden Sunset</option>
                                <option value="Street Life">Street Life</option>
                                <option value="Fantasy Forest">Fantasy Forest</option>
                                <option value="Seascape">Seascape</option>
                                <option value="Portrait">Portrait</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Description Textarea */}
                        <div>
                            <label className="label font-medium">Description</label>
                            <textarea
                                name="description"
                                required
                                rows="3"
                                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                                placeholder="Enter description"
                            ></textarea>
                        </div>
                        {/* dimension */}
                        <div>
                            <label className="label font-medium">Dimension</label>
                            <input
                                type="text"
                                name="dimension"
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Enter dimension"
                            />
                        </div>
                        {/* price */}
                        <div>
                            <label className="label font-medium">Price</label>
                            <input
                                type="text"
                                name="price"
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Enter price"
                            />
                        </div>

                        {/* medium */}
                        <div>
                            <label className="label font-medium">Medium</label>
                            <input
                                type="text"
                                name="medium"
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Enter medium"
                            />
                        </div>
                        {/* Thumbnail URL */}
                        <div>
                            <label className="label font-medium">Photo URL</label>
                            <input
                                type="url"
                                name="thumbnail"
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>
                        {/* artist name */}
                        <div>
                            <label className="label font-medium">Artist Name</label>
                            <input
                                type="text"
                                name="artistName"
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Enter artist-name"
                            />
                        </div>
                        {/* artist image */}
                        <div>
                            <label className="label font-medium">Artist image</label>
                            <input
                                type="text"
                                name="artistImage"
                                required
                                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>


                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn w-full text-white mt-6 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800"
                        >
                            Add Art
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addart;