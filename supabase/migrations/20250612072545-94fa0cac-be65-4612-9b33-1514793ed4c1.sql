
-- Включаем Row Level Security для таблицы tasks
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

-- Создаем политику для просмотра задач (пользователи видят только свои задачи)
CREATE POLICY "Users can view their own tasks" 
  ON public.tasks 
  FOR SELECT 
  USING (auth.uid() = user_id);

-- Создаем политику для создания задач
CREATE POLICY "Users can create their own tasks" 
  ON public.tasks 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Создаем политику для обновления задач
CREATE POLICY "Users can update their own tasks" 
  ON public.tasks 
  FOR UPDATE 
  USING (auth.uid() = user_id);

-- Создаем политику для удаления задач
CREATE POLICY "Users can delete their own tasks" 
  ON public.tasks 
  FOR DELETE 
  USING (auth.uid() = user_id);
