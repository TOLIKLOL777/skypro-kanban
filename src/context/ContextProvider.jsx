import { useCallback, useState, useContext } from "react";
import { TasksContext, AuthContext } from "./ContextAPI";
import { Login, Register } from "../services/auth";
import { deleteWord, editWord, fetchWords, getWord, postWord } from "../services/api";

const initialTasks = [
  { id: 1, title: "Купить молоко", status: "Нужно сделать", topic: "Web Design", completed: false, authorId: 1 },
  { id: 2, title: "Написать отчёт", status: "Готово", topic: "Research", completed: true, authorId: 1 },
  { id: 3, title: "Позвонить клиенту", status: "В работе", topic: "Copywriting", completed: false, authorId: 1 },
];

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getToken = () => JSON.parse(localStorage.getItem("userInfo") || "null")?.token;

  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchWords({ token: getToken() });
      setTasks(data?.tasks || data || []);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getTask = useCallback(async (id) => {
    const data = await getWord({ token: getToken(), id });
    return data.task;
  }, []);

  const addTask = async (task) => {
    const newTask = {
      title: task.title,
      status: task.status || "Без статуса",
      topic: task.topic || "Web Design",
      description: task.description || "",
      date: task.date || new Date().toISOString(),
      completed: false,
    };

    const data = await postWord({ token: getToken(), word: newTask });
    if (Array.isArray(data)) {
      setTasks(data);
    } else {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id !== id) return task;

        const statuses = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];
        const currentIndex = statuses.indexOf(task.status);
        const nextIndex = currentIndex < statuses.length - 1 ? currentIndex + 1 : 0;

        return { ...task, status: statuses[nextIndex], completed: nextIndex === statuses.length - 1 };
      })
    );
  };

  const deleteTask = async (id) => {
    const data = await deleteWord({ token: getToken(), id });
    if (Array.isArray(data)) {
      setTasks(data);
    } else {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== Number(id)));
    }
  };

  const updateTask = async (id, updatedTask) => {
    const data = await editWord({ token: getToken(), id, word: updatedTask });
    if (Array.isArray(data)) {
      setTasks(data);
    } else {
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === Number(id) ? { ...task, ...updatedTask } : task))
      );
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, loading, error, loadTasks, getTask, addTask, toggleTask, deleteTask, updateTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => Boolean(localStorage.getItem("userInfo")));

  const Auth = async (formData, isLogin) => {
    const data = isLogin
      ? await Login(formData)
      : await Register({
          name: formData.name,
          login: formData.login,
          password: formData.password,
        });

    if (data) {
      setIsAuth(true);
      localStorage.setItem("userInfo", JSON.stringify(data));
    }
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("userInfo");
  };

  return (
    <AuthContext.Provider value={{ isAuth, Auth, logout }}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth должен использоваться внутри AuthProvider");
  }
  return context;
}

export function useTasks() {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks должен использоваться внутри TasksProvider');
  }
  return context;
}