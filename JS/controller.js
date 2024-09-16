//Functions


function drawTable(){
    let HTML = "";
    for (let i = 0; i < taskList.length; i++) {
        HTML += /*HTML*/`
        <tbody>
        <tr>
            <td>${taskList[i].title}</td>
            <td>${taskList[i].task}</td>
            <td>${taskList[i].description}</td>
            <td>${taskList[i].deadline}</td> 
            <td>${taskList[i].status}</td>
        </tr>
        </tbody>
        `}
    
    HTML+= /*HTML*/ `
    <tbody>
    <tr>
            <td><input type="text" placeholder="Example Title..." onchange="tempTask.title = this.value"></td>
            <td><input type="text" placeholder="Example Task..." onchange="tempTask.task = this.value"></td>
            <td><input type="text" placeholder="Example Description..." onchange="tempTask.description = this.value"></td>
            <td><input type="date" placeholder="Example Deadline" onchange="tempTask.deadline = this.value"></td>
            <td><div onclick="addTask()"><img src="Assets/plus-circle-fill.svg"></div></td>
        </tr>
        </tbody>
        `; 
        
        return HTML;
}

function addTask(){
    // if løkke som sjekker at tempTask har alle felt fylt ut - hvis ikke, gå ut av funksjonen uten å legge til (return)
    if(tempTask.title == "" || tempTask.description == "" || tempTask.task == "")return;

    taskList.push(tempTask);
    updateView();

    tempTask= {
        title: '',
        task: '',
        description: '',
        deadline: '',
        status: 'Pending',
    }

}






function drawLists(){
    let listHTML = "";
    for (let i = 0; i < projectList.length; i++) {
        
        listHTML += /*HTML*/ `
        <div>${projectList[i]}</div>
        ` 
    } 

    listHTML += /*HTML*/`
    <div><input type="text" placeholder="New Project..." 
    onkeypress="tempProject = this.value ; clickPress(event) "></div>
    `
    
    return listHTML;
}

function addProjectToList(){
    
    if (!tempProject == ""){
        projectList.push(tempProject)
        updateView()
        
    }
    
    tempProject = "";
};








// Carl var "G" å lagde denne
function clickPress(event) {   
    if (event.key == "Enter") {
        addProjectToList();
    };
}

//Han lagde også denne, hva gjør denne egt???
function CarlSinFunksjon(){
    let div = document.createElement('div')
    div.id = "no"
    div.innerHTML = "\u0043\u0061\u0072\u006C\u0020\u0077\u0061\u0073\u0020\u0068\u0065\u0072\u0065";
    document.body.appendChild(div)


}