import listHook from '../hook/listHook.ts';


const ListView = () => {
    const hook = listHook()
    return (
     <div>
         <form onSubmit={hook.getListSubmit}>
             <input
                 type='text'
                 placeholder='შეავსე ველი'
                 name='list'
             />
             <button> დაამატე </button>
         </form>
         <ul>
             {hook.list.map((item, index) => {
                     return <li key={index}>{item}</li>;
             })}
         </ul>

     </div>
    )
}

export default ListView
