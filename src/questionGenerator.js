const softwareEngineerQuestions = [
  { question: "What is the primary purpose of a load balancer?", options: ["To store data consistently", "To distribute incoming network traffic across multiple servers", "To encrypt user data", "To compile code faster"], correctAnswerIndex: 1 },
  { question: "What does REST stand for?", options: ["Representational State Transfer", "Remote Server Transfer", "Relational State Transfer", "Responsive Server Time"], correctAnswerIndex: 0 },
  { question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Tree", "Graph"], correctAnswerIndex: 1 },
  { question: "What is a major advantage of using microservices?", options: ["Easier to manage single monolithic databases", "Reduced deployment time for the entire system", "Independent scaling and deployment of services", "Elimination of network latency"], correctAnswerIndex: 2 },
  { question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], correctAnswerIndex: 1 },
  { question: "Which HTTP method is typically used to update a resource?", options: ["GET", "POST", "PUT", "DELETE"], correctAnswerIndex: 2 },
  { question: "What is the concept of polymorphism in OOP?", options: ["Hiding internal implementation details", "Creating multiple instances of a class", "Functions behaving differently based on object types", "Inheriting from multiple classes"], correctAnswerIndex: 2 },
  { question: "What is a memory leak?", options: ["A hardware issue causing slow memory access", "When a program fails to release discarded memory", "When a program uses more memory than available", "A security vulnerability in memory allocation"], correctAnswerIndex: 1 },
  { question: "What is the purpose of an index in a database?", options: ["To structure unstructured data", "To improve the speed of data retrieval operations", "To encrypt sensitive fields", "To automatically backup tables"], correctAnswerIndex: 1 },
  { question: "What is CI/CD?", options: ["Continuous Integration / Continuous Deployment", "Code Inspection / Code Delivery", "Common Interface / Common Display", "Centralized Integration / Centralized Distribution"], correctAnswerIndex: 0 },
  { question: "Which sorting algorithm is generally considered the fastest for large datasets?", options: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Quick Sort"], correctAnswerIndex: 3 },
  { question: "What is garbage collection in Java?", options: ["Deleting old files from the disk", "A process that automatically frees memory taken by unused objects", "A compile-time optimization", "Clearing the cache memory"], correctAnswerIndex: 1 },
  { question: "What does SOLID stand for in software design?", options: ["Single, Open, Liskov, Interface, Dependency", "Simple, Object, Logic, Integrated, Dynamic", "Secure, Online, Local, Internal, Distributed", "Source, Output, Loop, Integer, Data"], correctAnswerIndex: 0 },
  { question: "What is the main difference between SQL and NoSQL?", options: ["SQL is for structured data, NoSQL is for unstructured/semi-structured", "SQL is faster than NoSQL", "NoSQL uses tables while SQL uses documents", "SQL only works offline"], correctAnswerIndex: 0 },
  { question: "What is the purpose of Docker?", options: ["To design UI components", "To containerize applications for consistent environments", "To provide cloud storage", "To automatically write unit tests"], correctAnswerIndex: 1 },
  { question: "What is a Promise in JavaScript?", options: ["A guarantee that a function will return a value", "An object representing the eventual completion or failure of an async operation", "A keyword used to define classes", "A method for loop iteration"], correctAnswerIndex: 1 },
  { question: "What is a callback function?", options: ["A function passed as an argument to another function", "A function that automatically executes on startup", "A function used exclusively for error handling", "A built-in method for string manipulation"], correctAnswerIndex: 0 }
];

const dataAnalystQuestions = [
  { question: "Which SQL clause is used to filter records?", options: ["SORT BY", "FILTER", "WHERE", "HAVING"], correctAnswerIndex: 2 },
  { question: "What is a primary key?", options: ["A key used to encrypt the database", "A unique identifier for a record in a table", "The most frequently accessed column", "A password to access the database"], correctAnswerIndex: 1 },
  { question: "Which chart is best for showing trends over time?", options: ["Pie Chart", "Line Chart", "Scatter Plot", "Bar Chart"], correctAnswerIndex: 1 },
  { question: "In statistics, what is the median?", options: ["The sum divided by the count", "The middle value in a sorted list", "The most frequent value", "The difference between max and min"], correctAnswerIndex: 1 },
  { question: "What does ETL stand for?", options: ["Extract, Transform, Load", "Evaluate, Translate, Learn", "Execute, Transfer, Load", "Extract, Test, Load"], correctAnswerIndex: 0 },
  { question: "What is the purpose of a VLOOKUP in Excel?", options: ["To create a pivot table", "To search vertically for a value in a column", "To calculate the variance", "To format cells based on conditions"], correctAnswerIndex: 1 },
  { question: "Which SQL command is used to add new rows?", options: ["UPDATE", "INSERT", "ADD", "CREATE"], correctAnswerIndex: 1 },
  { question: "What is a KPI?", options: ["Key Performance Indicator", "Key Process Integration", "Known Problem Issue", "Key Parameter Index"], correctAnswerIndex: 0 },
  { question: "What is data cleaning?", options: ["Deleting the entire database", "Formatting charts to look cleaner", "Fixing or removing incorrect, corrupted, or incomplete data", "Creating a backup of the data"], correctAnswerIndex: 2 },
  { question: "What is a pivot table primarily used for?", options: ["Connecting to external APIs", "Summarising, analyzing, exploring, and presenting summary data", "Writing Python code in Excel", "Designing database schemas"], correctAnswerIndex: 1 },
  { question: "Which Python library is famous for Data Manipulation?", options: ["Requests", "Django", "Pandas", "Flask"], correctAnswerIndex: 2 },
  { question: "What is A/B testing?", options: ["Testing two different APIs", "A randomized experiment with two variants, A and B", "Testing a database connection twice", "A debugging method in Python"], correctAnswerIndex: 1 },
  { question: "Which SQL clause is used to group rows that have the same values?", options: ["GROUP BY", "ORDER BY", "SORT BY", "MATCH BY"], correctAnswerIndex: 0 },
  { question: "What does standard deviation measure?", options: ["The average of the dataset", "The middle value", "The amount of variation or dispersion of a set of values", "The total count of items"], correctAnswerIndex: 2 },
  { question: "What is exploratory data analysis (EDA)?", options: ["Writing a final report", "Deploying a model", "Analyzing datasets to summarize their main characteristics", "Extracting data from an old system"], correctAnswerIndex: 2 },
  { question: "What is a foreign key?", options: ["A primary key from another table used to link two tables", "A password for external users", "A key that cannot be changed", "A composite primary key"], correctAnswerIndex: 0 },
  { question: "Which visualization is best for comparing parts of a whole?", options: ["Line Chart", "Histogram", "Pie Chart", "Scatter Plot"], correctAnswerIndex: 2 }
];

const generalQuestions = [
  ...softwareEngineerQuestions.slice(0, 8),
  ...dataAnalystQuestions.slice(0, 8)
];

const pools = {
  "software engineer": softwareEngineerQuestions,
  "data analyst": dataAnalystQuestions,
  "data scientist": dataAnalystQuestions, // reusing for prototype
  "developer": softwareEngineerQuestions
};

export const generateQuestions = (jobPost) => {
  const role = jobPost.toLowerCase();
  
  // Find which pool to use based on keywords
  let selectedPool = generalQuestions;
  for (const [key, pool] of Object.entries(pools)) {
    if (role.includes(key)) {
      selectedPool = pool;
      break;
    }
  }

  // Ensure we have at least 15 items in pool (we know our pools have 16-17)
  // If not, combine with general
  if (selectedPool.length < 15) {
      selectedPool = [...selectedPool, ...generalQuestions];
  }

  // Shuffle array using Fisher-Yates
  const shuffled = [...selectedPool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Take 15
  return shuffled.slice(0, 15);
};
