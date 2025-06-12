
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Edit, LogOut, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { User } from '@supabase/supabase-js';

interface Task {
  id: number;
  task_description: string;
  created_at: string;
  updated_at: string;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Проверяем аутентификацию
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        fetchTasks();
      } else {
        navigate('/auth');
      }
    };

    checkAuth();

    // Слушаем изменения аутентификации
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
        fetchTasks();
      } else {
        navigate('/auth');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchTasks = async () => {
    try {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast({
          title: "Ошибка загрузки",
          description: error.message,
          variant: "destructive"
        });
      } else {
        setTasks(data || []);
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить задачи",
        variant: "destructive"
      });
    }
  };

  const createTask = async () => {
    if (!newTaskDescription.trim()) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('tasks')
        .insert({
          task_description: newTaskDescription,
          user_id: user?.id
        });

      if (error) {
        toast({
          title: "Ошибка создания",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Успех!",
          description: "Задача создана"
        });
        setNewTaskDescription('');
        fetchTasks();
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось создать задачу",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async () => {
    if (!editingTask) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('tasks')
        .update({
          task_description: editingTask.task_description,
          updated_at: new Date().toISOString()
        })
        .eq('id', editingTask.id);

      if (error) {
        toast({
          title: "Ошибка обновления",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Успех!",
          description: "Задача обновлена"
        });
        setEditingTask(null);
        fetchTasks();
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось обновить задачу",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id: number) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', id);

      if (error) {
        toast({
          title: "Ошибка удаления",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Успех!",
          description: "Задача удалена"
        });
        fetchTasks();
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось удалить задачу",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-dark via-cyber-blue to-cyber-purple p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Заголовок */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-cyber-blue mr-3" />
            <h1 className="text-3xl font-bold text-gradient">Управление задачами</h1>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-foreground">
              {user?.email}
            </Badge>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Выйти
            </Button>
          </div>
        </div>

        {/* Форма создания задачи */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              Создать новую задачу
            </CardTitle>
            <CardDescription>
              Добавьте описание задачи и нажмите "Создать"
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="new-task">Описание задачи</Label>
                <Textarea
                  id="new-task"
                  value={newTaskDescription}
                  onChange={(e) => setNewTaskDescription(e.target.value)}
                  placeholder="Введите описание задачи..."
                  className="mt-1"
                />
              </div>
              <div className="flex items-end">
                <Button 
                  onClick={createTask} 
                  disabled={loading || !newTaskDescription.trim()}
                  className="cyber-glow"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Создать
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Список задач */}
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-muted-foreground">
                  У вас пока нет задач. Создайте первую!
                </p>
              </CardContent>
            </Card>
          ) : (
            tasks.map((task) => (
              <Card key={task.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  {editingTask?.id === task.id ? (
                    <div className="space-y-4">
                      <Textarea
                        value={editingTask.task_description}
                        onChange={(e) => setEditingTask({
                          ...editingTask,
                          task_description: e.target.value
                        })}
                        className="w-full"
                      />
                      <div className="flex gap-2">
                        <Button onClick={updateTask} disabled={loading} size="sm">
                          Сохранить
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => setEditingTask(null)} 
                          size="sm"
                        >
                          Отменить
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-foreground mb-2">{task.task_description}</p>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>Создано: {new Date(task.created_at).toLocaleString('ru-RU')}</span>
                          {task.updated_at !== task.created_at && (
                            <span>Обновлено: {new Date(task.updated_at).toLocaleString('ru-RU')}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingTask(task)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteTask(task.id)}
                          disabled={loading}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
