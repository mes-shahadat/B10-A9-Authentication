import cover from '../assets/cover.jpeg'

function UpdateProfile () {


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return <section className="my-10 mx-2 flex max-md:flex-col justify-center items-center gap-4">
        <div className='max-w-[500px] md:max-w-[560px] relative'>
            <img className='rounded-lg' src={cover} alt="" />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <p className='text-xl text-center font-semibold'>Welcome, mohammad yasin!</p>
            </div>
        </div>
        <div className="bg-white max-w-[500px] p-8 md:p-20 space-y-8 rounded-lg">
        <div className="text-center space-y-4">
            <img className="w-28 rounded-full mx-auto" src="https://i.ibb.co.com/cT3C9nH/Foodpanda.jpg" alt="" />
            <div className="space-y-2">
                <p className="text-lg font-bold">Mohammad yasin</p>
                <p className="font-semibold text-sm">Mohammadyasin74630@gmail.com</p>
            </div>
        </div>

        <form className="space-y-4" onSubmit={e => handleSubmit(e)}>
        <input className="w-full border p-3 rounded-lg focus:outline-none" type="text" placeholder="Name" name="name" defaultValue={"mohammad yasin"}/>
        <input className="w-full border p-3 rounded-lg focus:outline-none" type="text" placeholder="Photo URL" name="photo_url" defaultValue={"https://www.example.com"} />

            <button className="border w-full py-3 font-semibold rounded-lg bg-[#004e98] text-white" type="submit">Update Information</button>
        </form>
        
        </div>
    </section>
}

export default UpdateProfile;