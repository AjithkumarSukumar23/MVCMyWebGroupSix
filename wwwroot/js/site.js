// Dummy data for courses, users, and enrollments
let courses = [
    { id: 1, title: "Mathematics", description: "Learn basic math concepts", professor: "Smith" },
    { id: 2, title: "Physics", description: "Explore the world of physics", professor: "Johnson" },
    { id: 3, title: "Programming", description: "Introduction to programming", professor: "Williams" },
    { id: 4, title: "Biology", description: "Study of living organisms", professor: "Brown" },
    { id: 5, title: "Chemistry", description: "Explore the composition of substances", professor: "Taylor" },
    { id: 6, title: "History", description: "Understanding past events", professor: "Anderson" },
    { id: 7, title: "Literature", description: "Explore literary works", professor: "Martinez" },
    { id: 8, title: "Geography", description: "Study of the Earth's surface", professor: "Garcia" },
    { id: 9, title: "Computer Science", description: "Introduction to computer programming", professor: "Hernandez" },
    { id: 10, title: "Art", description: "Exploration of artistic expression", professor: "Young" }
];


let users = [
    { id: 1, name: "John Doe", email: "john@usf.edu", country: "USA", gender: "Males" },
    { id: 2, name: "Jane Smith", email: "jane@usf.edu", country: "USA", gender: "Female" },
    { id: 3, name: "Alice Johnson", email: "alice@usf.edu", country: "France", gender: "Female" },
    { id: 4, name: "Bob Brown", email: "bob@usf.edu", country: "France", gender: "Male" },
    { id: 5, name: "Eva Lee", email: "eva@usf.edu", country: "India", gender: "Female" },
    { id: 6, name: "Mike Clark", email: "mike@usf.edu", country: "India", gender: "Male" },
    { id: 7, name: "Sarah White", email: "sarah@usf.edu", country: "USA", gender: "Female" },
    { id: 8, name: "David Lee", email: "david@usf.edu", country: "India", gender: "Male" },
    { id: 9, name: "Emily Johnson", email: "emily@usf.edu", country: "France", gender: "Female" },
    { id: 10, name: "Michael Smith", email: "michael@usf.edu", country: "USA", gender: "Male" },
    { id: 11, name: "Maria Garcia", email: "maria@usf.edu", country: "India", gender: "Female" },
    { id: 12, name: "Daniel Martinez", email: "daniel@usf.edu", country: "France", gender: "Male" },
    { id: 13, name: "Laura Taylor", email: "laura@usf.edu", country: "USA", gender: "Female" },
    { id: 14, name: "Carlos Hernandez", email: "carlos@usf.edu", country: "India", gender: "Male" },
    { id: 15, name: "Sophia Brown", email: "sophia@usf.edu", country: "France", gender: "Female" },
    { id: 16, name: "William Lee", email: "william@usf.edu", country: "USA", gender: "Male" },
    { id: 17, name: "Olivia Johnson", email: "olivia@usf.edu", country: "India", gender: "Female" },
    { id: 18, name: "James Garcia", email: "james@usf.edu", country: "France", gender: "Male" },
    { id: 19, name: "Isabella Clark", email: "isabella@usf.edu", country: "USA", gender: "Female" },
    { id: 20, name: "Alexander Smith", email: "alexander@usf.edu", country: "India", gender: "Male" }
];



let enrollments = [
    { id: 1, userName: "John Doe", courseName: "Physics", professor: "Johnson" },
    { id: 2, userName: "Jane Smith", courseName: "Mathematics", professor: "Smith" },
    { id: 3, userName: "Jane Smith", courseName: "Physics", professor: "Johnson" },
    { id: 4, userName: "Alice Johnson", courseName: "Programming", professor: "Williams" },
    { id: 5, userName: "Bob Brown", courseName: "Physics", professor: "Johnson" },
    { id: 6, userName: "Eva Lee", courseName: "Mathematics", professor: "Smith" },
    { id: 7, userName: "Mike Clark", courseName: "Mathematics", professor: "Smith" },
    { id: 8, userName: "Sarah White", courseName: "Programming", professor: "Williams" },
    { id: 9, userName: "David Lee", courseName: "Physics", professor: "Johnson" },
    { id: 10, userName: "Emily Johnson", courseName: "Mathematics", professor: "Smith" },
    { id: 11, userName: "Maria Garcia", courseName: "Chemistry", professor: "Taylor" },
    { id: 12, userName: "Daniel Martinez", courseName: "History", professor: "Anderson" },
    { id: 13, userName: "Laura Taylor", courseName: "Literature", professor: "Martinez" },
    { id: 14, userName: "Carlos Hernandez", courseName: "Geography", professor: "Garcia" },
    { id: 15, userName: "Sophia Brown", courseName: "Computer Science", professor: "Hernandez" },
    { id: 16, userName: "William Lee", courseName: "Art", professor: "Young" },
    { id: 17, userName: "Olivia Johnson", courseName: "Biology", professor: "Brown" },
    { id: 18, userName: "James Garcia", courseName: "Physics", professor: "Johnson" },
    { id: 19, userName: "Isabella Clark", courseName: "Chemistry", professor: "Taylor" },
    { id: 20, userName: "Alexander Smith", courseName: "Mathematics", professor: "Smith" }
]

// Configuration Object
const pageConfig = {
    student: {
        data: users,
        tableId: 'users-table',
        editButtonId: 'edit-student-button',
        deleteButtonId: 'delete-student-button',
        addButtonId: 'add-user-button',
        fields: ['ID', 'Student Name', 'Email', 'Country', 'Gender'],
        fieldKeys: ['id', 'name', 'email', 'country', 'gender']
    },
    enrollment: {
        data: enrollments,
        tableId: 'enrollments-table',
        editButtonId: 'edit-enrollment-button',
        deleteButtonId: 'delete-enrollment-button',
        addButtonId: 'add-enrollment-button',
        fields: ['ID', 'Student Name', 'Course Name', 'Professor'],
        fieldKeys: ['id', 'userName', 'courseName', 'professor']
    },
    course: {
        data: courses,
        tableId: 'courses-table',
        editButtonId: 'edit-course-button',
        deleteButtonId: 'delete-course-button',
        addButtonId: 'add-course',
        fields: ['ID', 'Course Name', 'Description', 'Professor'],
        fieldKeys: ['id', 'title', 'description', 'professor']
    }
};

// Holds the current page's configuration
let currentPageConfig;

// Detect and set the current page configuration based on existing elements
function detectCurrentPage() {
    if (document.getElementById('courses-table')) {
        return pageConfig.course;
    } else if (document.getElementById('users-table')) {
        return pageConfig.student;
    } else if (document.getElementById('enrollments-table')) {
        return pageConfig.enrollment;
    }
    // Default case, handle as needed
    return null;
}

// Event listener to initialize the page after DOM content has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    currentPageConfig = detectCurrentPage();
    if (currentPageConfig) {
        displayData();
        setupButtonListeners();
    } else {
        console.error('No valid configuration found. Check if the correct table exists on the page.');
    }
});

function setupButtonListeners() {
    document.getElementById(currentPageConfig.editButtonId).addEventListener('click', editSelectedItem);
    document.getElementById(currentPageConfig.deleteButtonId).addEventListener('click', deleteSelectedItem);
    document.getElementById(currentPageConfig.addButtonId).addEventListener('click', addEntry);
}

function displayData() {
    disableButtons();  // Disable buttons initially
    const dataTable = document.getElementById(currentPageConfig.tableId);
    dataTable.innerHTML = '';  // Clear existing data

    const headerRow = dataTable.insertRow();
    currentPageConfig.fields.forEach(text => {
        const header = document.createElement('th');
        header.textContent = text;
        headerRow.appendChild(header);
    });

    currentPageConfig.data.forEach((item, index) => {
        const row = dataTable.insertRow();
        currentPageConfig.fieldKeys.forEach(key => {
            const cell = row.insertCell();
            cell.textContent = item[key];
        });

        row.addEventListener('click', function () {
            selectedRowIndex = index;
            // Enable buttons when a row is selected
            enableButtons();
            const rows = dataTable.getElementsByTagName('tr');
            Array.from(rows).forEach(row => row.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

function disableButtons() {
    document.getElementById(currentPageConfig.editButtonId).disabled = true;
    document.getElementById(currentPageConfig.deleteButtonId).disabled = true;
}

function enableButtons() {
    document.getElementById(currentPageConfig.editButtonId).disabled = false;
    document.getElementById(currentPageConfig.deleteButtonId).disabled = false;
}

// Function to edit, delete, or add items based on selected row index
function editSelectedItem() {
    if (selectedRowIndex === -1) {
        console.log('No item selected.');
        return;
    }
    const selectedItem = currentPageConfig.data[selectedRowIndex];
    currentPageConfig.fields.forEach((field, index) => {
        const key = currentPageConfig.fieldKeys[index];
        let newValue = prompt(`Enter new ${field}:`, selectedItem[key]);
        while (newValue !== null && !isValidInput(newValue, field)) {
            alert(`Invalid input for ${field}. Please enter a valid value.`);
            newValue = prompt(`Enter new ${field}:`, selectedItem[key]);
        }
        if (newValue !== null) {
            selectedItem[key] = newValue;
        }
    });
    displayData();
}

function deleteSelectedItem() {
    if (selectedRowIndex === -1) {
        console.log('No item selected.');
        return;
    }
    if (confirm("Are you sure you want to delete this item?")) {
        currentPageConfig.data.splice(selectedRowIndex, 1);
        displayData();
        disableButtons();
        // Reset the selection index
        selectedRowIndex = -1;
    }
}

function addEntry() {
    switch (currentPageConfig) {
        case pageConfig.student:
            addUser();
            break;
        case pageConfig.enrollment:
            addEnrollment();
            break;
        case pageConfig.course:
            addCourse();
            break;
    }
}





function addUser() {
    const newId = prompt("Enter new ID (must be numeric):");
    const newName = prompt("Enter new Name (alphabetic only):");
    const newEmail = prompt("Enter new Email (must contain '@' and a domain):");
    const newCountry = prompt("Enter new Country (alphabetic only):");
    const newGender = prompt("Enter new Gender (Male, Female, or Other):");

    if (!newId || !newName || !newEmail || !newCountry || !newGender) {
        alert("All fields must be filled!");
        return;
    }

    users.push({
        id: newId,
        name: newName,
        email: newEmail,
        country: newCountry,
        gender: newGender
    });

    displayData()
}

function addEnrollment() {
    const newId = prompt("Enter new ID (must be numeric):");
    const newStudentName = prompt("Enter new Student Name (alphabetic only):");
    const newCourseName = prompt("Enter new Course Name (free text):");
    const newProfessorName = prompt("Enter new Professor Name (alphabetic only):");

    if (!newId || !newStudentName || !newCourseName || !newProfessorName) {
        alert("All fields must be filled!");
        return;
    }

    enrollments.push({
        id: newId,
        userName: newStudentName,
        courseName: newCourseName,
        professor: newProfessorName
    });

    displayData();
}
//function to addcourse
function addCourse() {
    const newId = prompt("Enter new ID (must be numeric):");
    const newTitle = prompt("Enter new Title (alphabetic only):");
    const newDescription = prompt("Enter new Description (free text):");
    const newProfessor = prompt("Enter new Professor's Name (alphabetic only):");

    if (!newId || !newTitle || !newDescription || !newProfessor) {
        alert("All fields must be filled!");
        return;
    }

    courses.push({
        id: newId,
        title: newTitle,
        description: newDescription,
        professor: newProfessor
    });

    displayData();
}


// Validation function
function isValidInput(input, field) {
    switch (field) {
        case 'ID':
            return /^\d+$/.test(input);
        case 'Email':
            return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input);
        case 'Name':
        case 'Student Name':
        case 'Professor Name':
        case 'Course Name':
        case 'Description':
        case 'Country':
            return /^[A-Za-z\s]+$/.test(input);
        case 'Gender':
            return /^(Male|Female|Other)$/i.test(input);
        default:
            return true;
    }
}

// Initialize selectedRowIndex
let selectedRowIndex = -1;  
