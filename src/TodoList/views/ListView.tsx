import listHook from '../hook/listHook.ts';


const ListView = () => {
    const hook = listHook()
    return (
     <div className='mt-5'>
         <form onSubmit={hook.getListSubmit}>
             <div className='d-flex justify-content-center align-items-center'>
                 <input
                     className='input'
                     type='text'
                     placeholder='შეიყვანე ინგრედიენტები'
                     name='list'
                 />
                 <button className='bg add-button'> დაამატე </button>
             </div>
         </form>
         <div className='ingredients-list'>
             <h3> დამატებული ინგრედიენტები: </h3>
             <ul>
                 {hook.list.map((item, index) => {
                     return <li key={index}>{item}</li>;
                 })}
             </ul>
         </div>


     </div>
    )
}

export default ListView
