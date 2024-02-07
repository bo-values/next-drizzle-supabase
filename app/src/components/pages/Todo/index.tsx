"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { ChangeEvent, useEffect, useState } from "react"
import { Check, PencilLine, Plus, RefreshCcw, Trash } from "lucide-react"

type Task = {
    /**
     * Task ID
     */
    id: string

    /**
     * Task Title
     */
    label: string
}


export default function Index() {
    const [refetch, setRefetch] = useState(true)
    const [addText, setAddText] = useState("")
    const [updateText, setUpdateText] = useState("")
    const [isUpdateMode, setIsUpdateMode] = useState(false)
    const [taskId, setTaskId] = useState("")
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        if (!refetch) return
        (async () => {
            const data = await getTasks()
            setTasks(data)
            setRefetch(false)
        })()
    }, [refetch, setTasks])

    /**
     * get tasks
     * @returns 
     */
    async function getTasks() {
        return [
            {
                id: "task-1",
                label: "Buy groceries"
            },
            {
                id: "task-2",
                label: "Finish project report"
            },
            {
                id: "task-3",
                label: "Call the doctor"
            }
        ]
    }

    /**
     * refresh all state
     */
    function refreshAll() {
        setAddText("")
        setUpdateText("")
        setIsUpdateMode(false)
        setTaskId("")
        setRefetch(true)
    }

    /**
     * handle Update Mode
     * 
     * @param taskId 
     * @param taskText 
     */
    function handleUpdateMode(taskId: string, taskText: string) {
        setTaskId(taskId)
        setUpdateText(taskText)
        setIsUpdateMode(!isUpdateMode)
    }

    /**
     * handle Update Task Text
     * @param element 
     */
    function handleUpdateText(element: ChangeEvent<HTMLInputElement>) {
        setUpdateText(element.target.value)
    }

    /**
     * execute "Add" Task
     */
    function addTask() {
        console.log(addText)
        // add process here
        refreshAll()
    }

    /**
     * execute "Update" Task
     * @param taskId 
     */
    function updateTask(taskId: string) {
        console.log({ taskId, updateText })
        // update process here
        setIsUpdateMode(!isUpdateMode)
        setTaskId("")
        setUpdateText("")
    }

    /**
     * execute "Delete" Task
     * @param taskId 
     */
    function deleteTask(taskId: string) {
        console.log(taskId)
        // delete process here
    }


    return (
        <main className="w-full max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-start items-center">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">Todo List</h1>
                <div className="ml-2">
                    <RefreshCcw className="cursor-pointer" onClick={refreshAll} />
                </div>
            </div>
            <div className="mt-6 space-y-4" >
                <div className="space-y-1">
                    <Label htmlFor="task">New Task</Label>
                    <Input id="task" placeholder="Enter a new task" value={addText} onChange={(event) => setAddText(event.target.value)} />
                </div>
                <Button type="button" onClick={() => addTask()} disabled={addText.length < 1}>
                    <Plus className="h-5 w-5" />
                    <span className="ml-2">Add task</span>
                </Button>
            </div>

            {
                tasks.map(task => {
                    return (
                        <Card key={task.id} className="my-2">
                            <CardContent className="flex items-center justify-between p-4">
                                <div className="flex items-center gap-2 w-full">
                                    {
                                        (taskId !== task.id) && (
                                            <Label className="text-lg" htmlFor="task-2">
                                                {task.label}
                                            </Label>
                                        )
                                    }
                                    {
                                        (isUpdateMode && taskId === task.id) && (
                                            <div className="w-full">
                                                <Input type="text" id={`edit-${task.id}`} value={updateText} onChange={handleUpdateText} className="w-full border-none text-lg" />
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="flex items-center gap-2">
                                    {
                                        (taskId !== task.id) && (
                                            <Button size="icon" variant="ghost" disabled={isUpdateMode} onClick={() => handleUpdateMode(task.id, task.label)}>
                                                <PencilLine className="h-5 w-5" />
                                                <span className="sr-only">Edit task</span>
                                            </Button>

                                        )
                                    }
                                    {
                                        (isUpdateMode && taskId === task.id) && (
                                            <Button size="icon" variant="ghost" onClick={() => updateTask(task.id)}>
                                                <Check className="h-5 w-5" />
                                                <span className="sr-only">Update task</span>
                                            </Button>
                                        )
                                    }
                                    <Button size="icon" variant="ghost" disabled={isUpdateMode} onClick={() => deleteTask(task.id)}>
                                        <Trash className="h-5 w-5" />
                                        <span className="sr-only">Delete task</span>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })
            }
            {
                tasks.length < 1 && <div className="text-center">no data</div>
            }
        </main>
    )
}