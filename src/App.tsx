import { useState } from 'react'
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea';

import img from './assets/images/delete.png';

const App = () => {

  // Lista a ser mostrada no ToDo
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: new Date().getTime(),
      name: taskName,
      done: false,
    });
    setList(newList);
  }

  function handleRemoveTask(id: number) {
    console.log(id);
    const newList = list.filter((item) => item.id !== id)
    setList(newList);
  }

  const numRows = list.length;

  return (
    <C.ContainerBody>
      <C.Container>
        <C.Area>
          <C.Header>T O D O</C.Header>

          {/* Área para adicionar nova tarefa */}
          <AddArea onEnter={handleAddTask} />

          <C.ContainerList>
            {/* Lista de tarefas */}
            {list.map((item, index) => (
              <C.ContainerActionsList>
                <ListItem key={index} item={item} />
                <C.ContainerButton>
                  <button onClick={() => handleRemoveTask(item.id)}><img src={img} key={item.id} /></button>
                </C.ContainerButton>
              </C.ContainerActionsList>
            ))}

            {/* Numero de tarefas */}
            <C.OptionsContainer>{numRows} itens </C.OptionsContainer>
          </C.ContainerList>
        </C.Area>
      </C.Container>
      <C.FooterContainer><h3>® Developed by <a href="https://github.com/vitormsiqueira">Vitor Siqueira</a> </h3></C.FooterContainer>
    </C.ContainerBody>

  );
}

export default App;