import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit,reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const onSubmit =async data => {
        console.log(data);
        const axiosPublic = useAxiosPublic();
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })

        console.log(res.data);

        if(res.data.success){
            const menuItem = {
                name:data.name,
               category:data.category,
               price:parseFloat(data.price),
               recipe:data.details,
               image:res.data.data.display_url
            }

            const menuRes = await axiosSecure.post('/menu', menuItem)
            if(menuRes.data.insertedId){
                reset();
                Swal.fire("Inserted Successfully")
            }

            console.log(menuRes.data);
        }
    }

    return (
        <div>
            <SectionTitle subHeading={'adding'} heading={'Add Item'}></SectionTitle>
            <div className="w-2/3 mx-auto shadow-xl p-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-2">
                        <label className="label">
                            <span>Recipe Name <span className="text-red-500 text-lg">*</span></span>
                        </label>
                        <input className="input input-bordered  w-full" {...register("name")} />
                    </div>
                    <div className="flex gap-4">
                        <div className="w-full" >
                            <label className="label">
                                <span>Category <span className="text-red-500 text-lg">*</span></span>
                            </label>

                            <select {...register('category')} className="select select-bordered w-full">

                                <option value='salad'>Salad</option>
                                <option value='pizza'>Pizza</option>
                                <option value='soup'>Soup</option>
                                <option value='dessert'>Dessert</option>
                                <option value='drinks'>Drinks</option>
                            </select>

                        </div>

                        <div className="w-full">
                            <label className="label">
                                <span>Price <span className="text-red-500 text-lg">*</span></span>
                            </label>
                            <input className="input input-bordered  w-full" {...register("price")} />
                        </div>
                    </div>


                    <div className="w-full my-2">
                        <label className="label">
                            <span>Recipe Details <span className="text-red-500 text-lg">*</span></span>
                        </label>
                        <textarea
                            {...register('details')}
                            placeholder="Details"
                            className="textarea textarea-bordered textarea-lg w-full  "></textarea>
                    </div>


                    <div>
                        <input {...register("image")} type="file" className="file-input file-input-bordered w-full" />
                    </div>

                    <br />
                    <button className="btn">Add Item <FaUtensils></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;