


let students = JSON.parse(localStorage.getItem("students")) || [
  { id: 1, name: "Alice", email: "alice@example.com", course: "React" },
  { id: 2, name: "Bob", email: "bob@example.com", course: "Vue" },
  { id: 3, name: "Charlie", email: "charlie@example.com", course: "Angular" },
  { id: 4, name: "David", email: "david@example.com", course: "React" },
  { id: 5, name: "Eva", email: "eva@example.com", course: "Svelte" },
  { id: 6, name: "Frank", email: "frank@example.com", course: "Next.js" },
  { id: 7, name: "Grace", email: "grace@example.com", course: "Vue" },
  { id: 8, name: "Hannah", email: "hannah@example.com", course: "Angular" },
  { id: 9, name: "Ian", email: "ian@example.com", course: "React" },
  { id: 10, name: "Judy", email: "judy@example.com", course: "Svelte" }
];


function saveToStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}

export function fetchStudents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...students]);
    }, 1000);
  });
}

export function addStudent(newStudent) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const studentWithId = { ...newStudent, id: Date.now() };
      students.push(studentWithId);
      saveToStorage(); // persist it
      resolve(studentWithId);
    }, 500);
  });
}


export const getStudentById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const students = localStorage.getItem("students");
      const parsedStudents = JSON.parse(students);
      const student = parsedStudents.find((student) => student.id === Number(id));
      resolve(student || null);
    }, 500);
  });