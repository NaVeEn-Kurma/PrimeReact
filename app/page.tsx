   'use client'

// Import necessary modules
import React, { useState } from 'react';
import { Tree } from 'primereact/tree';
import classNames from 'classnames'; // Import classNames utility
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';

// Component definition
const App = () => {
  // State for selected keys
  const [selectedKeys, setSelectedKeys] = useState(null);

  // Sample tree data
  const [data, setData] = useState([
    {
      key: '0',
      label: 'Database',
      data: 'Documents Folder',
      icon: 'pi pi-fw pi-inbox',
      children: [
        {
          key: '0-0',
          label: 'schemas',
          data: 'Work Folder',
          icon: 'pi pi-fw pi-cog',
          children: [
            { key: '0-0-0', 
              label: 'public', 
              icon: 'pi pi-fw pi-file', 
              data: 'Expenses Document',
              children:[
                {
                  key: '0-0-0-0', 
                  label: 'tables', 
                  icon: 'pi pi-fw pi-file', 
                  data: 'Table Data',
                },
                {
                    key: '0-0-0-1', 
                    label: 'functions', 
                    icon: 'pi pi-fw pi-file', 
                    data: 'Functions data',
                }
                
              ]
           },
            { key: '0-0-1', label: 'Hello', icon: 'pi pi-fw pi-file', data: 'Resume Document' },
          ],
        },
        {
          key: '0-1',
          label: 'Extensions',
          data: 'Home Folder',
          icon: 'pi pi-fw pi-home',
          children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }],
        },
      ],
    },
  ]);

  // Tailwind styles
      
  const findObjectsByKeys = (keys:any, treeData:any) => {
    let selectedObjects:any = [];
    
    const traverse = (node:any, selectedKeys:any) => {
      if (selectedKeys.includes(node.key)) {
        selectedObjects.push(node);
      }
      
      if (node.children) {
        node.children.forEach((child:any) => traverse(child, selectedKeys));
      }
    };

    treeData.forEach((node:any) => traverse(node, keys));

    return selectedObjects;
  };
  // Render the component
  return (
    <div>
      <div className="card flex justify-content-center">
        <Tree
          value={data}
          selectionMode="checkbox"
          selectionKeys={selectedKeys}
          onSelectionChange={(e:any) => {
            setSelectedKeys(e.value);
            const selectedObjects = findObjectsByKeys(e.value, data);
            console.log("Selected Objects:", selectedObjects);
          }}
          pt={{
          checkbox: ({ context, props }:{context:any,props:any}) => ({
              className:context.checked?'bg-[#4ade80]':'undefined'
          })
      }}
          className="w-full md:w-30rem"
        />
      
      </div>
      <Button label="Submit" />
    </div>
  );
};

// Export the component
export default App;

// import React from "react";
// import { useSelector,useDispatch } from 'react-redux';
// import { addToList } from "@/redux/slices/todoSlice";
// import { useState } from "react";

// const App=(state)=>{
//   const list=useSelector((state)=>state.rootReducer.todo.list);
//   const dispatch=useDispatch();
//   const [newTodo, setNewTodo] = useState('');
  
//   console.log(list);
//   const handleAddTodo = () => {
//     dispatch(addToList(newTodo));
//     setNewTodo('');
//   };
//   return(
//     <div>
//        <div>
//       <h1>ToDo List</h1>
//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>
//     </div>
//       <ul>
//       {list && list.map((todo, index) => (
//         <li key={index}>{todo}</li>
//       ))}
//     </ul>
//     </div>
//   )
// }

// export default App;




