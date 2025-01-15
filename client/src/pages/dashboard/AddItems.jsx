import { Helmet } from "react-helmet"
import SectionTitle from './../../components/ui/SectiontTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from './../../hooks/useAxiosSecure';
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data.image[0]);
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        // console.log(res.data.data.url);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: data.price,
                recipe: data.recipe,
                image: res.data.data.url
            }

            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                Swal.fire({
                    title: 'Item Added',
                    text: 'Item has been added to the menu',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
            }
        }

    }
    console.log(errors);
    return (
        <div>
            <Helmet>
                <title>Admin | Add Items</title>
            </Helmet>

            <SectionTitle heading="Add Items" subHeading="What's New?" />

            <div className="bg-gray-100 p-4 md:p-8 max-w-4xl mx-auto rounded-lg shadow-md">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 flex flex-col mx-auto">
                    <label htmlFor="name">Recipe Name</label>
                    <input type="text"
                        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-yolo "
                        placeholder="Recipe name"
                        {...register("name", { required: true, maxLength: 100 })}
                    />

                    <div className="flex flex-col md:flex-row justify-between gap-2">
                        <div className="form-control w-full">
                            <label htmlFor="category">Select Category</label>

                            <select
                                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-yolo "
                                placeholder="Category" {...register("category", { required: true })}>
                                <option disabled value="">Select a category</option>
                                <option value="dessert">Dessert</option>
                                <option value="pizza">Pizza</option>
                                <option value="salad">Salad</option>
                                <option value="soup<">Soup</option>
                                <option value="popular">Popular</option>
                                <option value="drinks">Drinks</option>
                                <option value="offered">Offered</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label htmlFor="price">Enter Price ($)</label>

                            <input
                                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-yolo "
                                type="number" placeholder="Price" {...register("price", { required: true, minLength: 1, maxLength: 5 })} />
                        </div>
                    </div>


                    <label htmlFor="recipe">Recipe Description</label>

                    <textarea
                        rows={5}
                        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-yolo "
                        placeholder="Description" {...register("recipe", { required: true })} />


                    <label htmlFor="name">Select An Item Image</label>

                    <input
                        type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full" />

                    <div className="w-full">
                        <button type="submit" className="btn btn-warning md:text-lg mt-2 w-full flex items-center gap-2">Add Item<FaUtensils /></button>

                    </div>
                </form>

            </div >
        </div >
    )
}

export default AddItems