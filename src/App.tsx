import './assets/react.svg'
import { Page } from './Page/Page';
import { AppStateProvider } from './state/AppStateContext';

/*import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { zipWith } from "lodash"*/

function App() {
  return (
    <AppStateProvider>
      <Page />
    </AppStateProvider>
  );
}

export default App
/* function Page() {
  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('todos').select()

      if (todos && todos.length > 1) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <><div>
          {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
          ))}

      </div><div>
              <button onClick={async () => {
                  const { data: todos } = await supabase.from('todos').insert([{ title: 'Do laundry', completed: false }])
                  if (todos) {
                    setTodos(prevTodos => [...prevTodos, ...todos])
                  }
              } }>Add todo</button>
                
          </div>
            <div>
                <button onClick={async () => {
                    const { data: todos } = await supabase.from('todos').delete().match({ completed: true })
                    if (todos) {
                        setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
                    }
                }
                }>Delete completed</button> 
            </div>
            <div>
                <button onClick={async () => {
                    const { data: todos } = await supabase.from('todos').update({ completed: true }).match({ completed: false })
                    if (todos) {
                        setTodos(prevTodos => prevTodos.map(todo => ({ ...todo, completed: true })))
                    }
                }
                }>Complete all</button>
            </div>  
                </>
    
  )
}
export default  */