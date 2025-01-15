import { Helmet } from "react-helmet"
import SectionTitle from './../../components/ui/SectiontTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
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
                                <option value="Dessert">Dessert</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Salad">Salad</option>
                                <option value="Soup<">Soup</option>
                                <option value="Popular">Popular</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Offered">Offered</option>
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