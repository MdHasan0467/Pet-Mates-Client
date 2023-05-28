import { FaCat } from 'react-icons/fa'

const News = () => {
  return (
       <div className=''>
            <div className='flex items-center ml-10 lg:ml-20'>
            <FaCat  className='text-5xl gap-4 text-sky-600 mx-2'></FaCat>
            <h1 className='text-5xl text-cyan-900 font-bold my-16 text-center'>News</h1>
            </div>

            <div className='grid lg:grid-cols-4 grid-cols-1 ml-20'>

            <article>
        <h2 className="text-xl font-bold text-sky-500 hover:text-red-500 cursor-pointer">Sed diam massa, semper a condimentum</h2>
        <p className="mt-4 dark:text-gray-400 text-sm">Morbi porttitor mi in diam scelerisque commodo. Proin sed laoreet libero. Fusce faucibus porttitor lacus, at blandit mauris blandit eget. Donec facilisis lorem et risus commodo, quis auctor nulla varius. Pellentesque facilisis feugiat turpis, id molestie augue semper quis. Nunc ornare eget est sit amet elementum.</p>
        <div className="flex items-center mt-8 space-x-4">
          <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
          <div>
            <h3 className="text-sm font-medium">Leroy Jenkins</h3>
            <time  className="text-sm dark:text-gray-400">Feb 18th 2021</time>
          </div>
        </div>
      </article>


            <article>
        <h2 className="text-xl font-bold text-sky-500 hover:text-red-500 cursor-pointer">Sed diam massa, semper a condimentum</h2>
        <p className="mt-4 dark:text-gray-400 text-sm">Morbi porttitor mi in diam scelerisque commodo. Proin sed laoreet libero. Fusce faucibus porttitor lacus, at blandit mauris blandit eget. Donec facilisis lorem et risus commodo, quis auctor nulla varius. Pellentesque facilisis feugiat turpis, id molestie augue semper quis. Nunc ornare eget est sit amet elementum.</p>
        <div className="flex items-center mt-8 space-x-4">
          <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
          <div>
            <h3 className="text-sm font-medium">Leroy Jenkins</h3>
            <time  className="text-sm dark:text-gray-400">Feb 18th 2021</time>
          </div>
        </div>
      </article>

      

            <article>
        <h2 className="text-xl font-bold text-sky-500 hover:text-red-500 cursor-pointer">Sed diam massa, semper a condimentum</h2>
        <p className="mt-4 dark:text-gray-400 text-sm">Morbi porttitor mi in diam scelerisque commodo. Proin sed laoreet libero. Fusce faucibus porttitor lacus, at blandit mauris blandit eget. Donec facilisis lorem et risus commodo, quis auctor nulla varius. Pellentesque facilisis feugiat turpis, id molestie augue semper quis. Nunc ornare eget est sit amet elementum.</p>
        <div className="flex items-center mt-8 space-x-4">
          <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
          <div>
            <h3 className="text-sm font-medium">Leroy Jenkins</h3>
            <time  className="text-sm dark:text-gray-400">Feb 18th 2021</time>
          </div>
        </div>
      </article>


            <article>
        <h2 className="text-xl font-bold text-sky-500 hover:text-red-500 cursor-pointer">Sed diam massa, semper a condimentum</h2>
        <p className="mt-4 dark:text-gray-400 text-sm">Morbi porttitor mi in diam scelerisque commodo. Proin sed laoreet libero. Fusce faucibus porttitor lacus, at blandit mauris blandit eget. Donec facilisis lorem et risus commodo, quis auctor nulla varius. Pellentesque facilisis feugiat turpis, id molestie augue semper quis. Nunc ornare eget est sit amet elementum.</p>
        <div className="flex items-center mt-8 space-x-4">
          <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
          <div>
            <h3 className="text-sm font-medium">Leroy Jenkins</h3>
            <time  className="text-sm dark:text-gray-400">Feb 18th 2021</time>
          </div>
        </div>
      </article>


            </div>
       </div>
  )
}

export default News