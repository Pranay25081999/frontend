import { useEffect, useState } from 'react'
import { UPDATE_TASK, DELETE_TASK } from '../apis/taskApis'
import TaskForm from '../utils/taskForm'

const UpdateTask = ({ isEditing, setEditing, setLoading }) => {
    
    const [activeTask, setActiveTask] = useState({
        title: '',
        description: '',
        startDate: '',
        dueDate: '',
        status: ''
    })

    const { title, description, startDate, dueDate, status } = activeTask

    useEffect(() => {
        setActiveTask(isEditing.editingTask)
    }, [isEditing.editingTask])

    const handleUpdate = async () => {
        setLoading(true)
        const response = await fetch(UPDATE_TASK, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(activeTask)
        })
        setLoading(false)
        const data = await response.json()
        if (!data) {
            throw new Error('Unable to update the task')
        }
        setEditing({
            isActive: false,
            editingTask: {},
            isUpdated: true
        })
    }

    const handleChange = (e) => {
        setActiveTask({...activeTask, [e.target.name]:e.target.value})
    }

    const hadleDelete = async () => {
        const deleteUrl =  DELETE_TASK + isEditing.editingTask._id
        const response = await fetch(deleteUrl, {
            method: 'DELETE'
        })
        const data = await response.json()
        if (!data) {
            throw new Error('Unable to delete')
        }

        setEditing({
            isActive: false,
            editingTask: {},
            isUpdated: true
        })
    }

    return (
        <>
        {
            isEditing.isActive && <TaskForm 
            header={'Update task'}
            title={title}
            description={description}
            status={status}
            startDate={startDate}
            dueDate={dueDate}
            setEditing={setEditing}
            handleChange={handleChange}
            handleUpdate={handleUpdate}
            hadleDelete={hadleDelete}
            />
    }
    </>
    )
}

export default UpdateTask;