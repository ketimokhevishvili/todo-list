import React, { useState} from "react";

export interface ListHook {
    getListSubmit: (event: React.FormEvent) => void
    deleteListItem: (index: number) => void
    list: { text: string; checked: boolean }[]
    checkedItems: { text: string; checked: boolean }[]
    handleCheckboxChange: ( index: number ) => void
}

const listHook = (): ListHook => {
    const [list, setList] = useState<{ text: string; checked: boolean }[]>([])
    const [checkedItems, setCheckedItems] = useState<{ text: string; checked: boolean }[]>([])

    const getListSubmit =  (event: React.FormEvent) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        const newItem = formData.get('list')
        if (typeof newItem === 'string' && newItem.trim() !== '') {
            setList(prevList => [...prevList, { text: newItem, checked: false }])
            form.reset()
        }
    }
    const handleCheckboxChange = (index: number) => {
            setCheckedItems(prevList => {
                return [...prevList, list[index]]
            })
            setList(prevList =>
                prevList.filter((_, inx) => inx !== index)
            )

    }


    const deleteListItem = (index: number) => {
        setCheckedItems(prevList =>
            prevList.filter((_, inx) => inx !== index)
        )
    }


    return {list, getListSubmit, deleteListItem, checkedItems, handleCheckboxChange}
}

export default listHook
