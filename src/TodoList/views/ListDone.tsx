

interface listProps {
    checkedItems: { text: string; checked: boolean }[];
    deleteListItem: (index: number) => void
}


const ListDone = (props: listProps) => {
    return (
        <>
            {props.checkedItems.map((el,index) =>{
                return(
                    <div key={index}>
                        <ul>
                            <div className='d-flex'>
                               <li
                                   style={{
                                   textDecoration: el.text ? 'line-through' : 'none',
                                   marginLeft: 10
                               }}
                               >{el.text}</li>
                                <span
                                    style={{marginLeft: 10}}
                                    className='text-danger btn'
                                    onClick={() =>
                                        props.deleteListItem(index)
                                    }
                                > x </span>
                            </div>
                        </ul>
                    </div>
                )
            })}
        </>
    )
}

export default ListDone
