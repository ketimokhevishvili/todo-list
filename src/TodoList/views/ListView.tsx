import listHook from '../hook/listHook.ts'
import ListDone from "./ListDone.tsx";


const ListView = () => {
    const hook = listHook()
    return (
     <div>
         <form onSubmit={hook.getListSubmit} className='mt-5'>
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
             <div className='ingredients'>
                 {hook.list.map((item, index) => {
                     return (
                         <div  key={index}>
                             <div>
                                 <div className='d-flex'>
                                     <input
                                         type="checkbox"
                                         checked={false}
                                         onChange={ () => hook.handleCheckboxChange(index)}
                                     />
                                     <label style={{marginLeft: 10}}>{item.text}</label>
                                 </div>
                             </div>
                         </div>
                     )
                 })}
                 <ListDone deleteListItem={hook.deleteListItem} checkedItems={hook.checkedItems} />
             </div>
         </div>
     </div>
    )
}

export default ListView
