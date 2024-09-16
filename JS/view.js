// Update HTML

const app = document.getElementById("app");

//--------------------------------------------------------

CarlSinFunksjon()
updateView()
function updateView() {
  app.innerHTML = /*HTML*/ ` 
  <header>
        <div>Todo.io</div>
    </header>


    <div class="sidebarLeft">

        <div>My Project 1</div>
        <div>My Project 2</div>
        <div>My Project 3</div>
        <div><input type="text" placeholder="New Project..."></div>

    </div>

    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Task</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>Status</th>
            </tr>
        </thead>
            ${drawTable()}
    </table>
  `;
}
