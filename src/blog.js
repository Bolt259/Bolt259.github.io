// type Blog = {
//     title: string;    
//     date: string;
//     description: string;
//     slug: string;
// }
var blogTypes = [
    'Personal',
    'Career',
    'Exploration',
    'Tech',
];
var blogs = [
    {
        title: "Personal",
        date: "11/2/2023",
        description: "Life & sports",
        slug: "blog-personal",
    },
    {
        title: "Career",
        date: "11/2/2023",
        description: "Ventures & projects",
        slug: "blog-career",
    },
    {
        title: "Exploration",
        date: "11/2/2023",
        description: "Nature & hiking",
        slug: "blog-exploration",
    },
    {
        title: "Tech",
        date: "11/2/2023",
        description: "Interests & cutting edge",
        slug: "blog-tech",
    },
];
function createBlogElements() {
    var container = document.querySelector('.blog-container');
    if (container) {
        blogs.forEach(function (blog) {
            // Create a new <div> element for each blog
            var blogElement = document.createElement('div');
            blogElement.classList.add('blog-entry'); // Add a CSS class for styling
            // Create HTML content for the blog entry
            blogElement.innerHTML = "\n                <h2>".concat(blog.title, "</h2>\n                <p>Date: ").concat(blog.date, "</p>\n                <p>").concat(blog.description, "</p>\n                <a href=\"").concat(blog.slug, "\">Read more</a>\n            ");
            // Append the new blog element to the container
            container.appendChild(blogElement);
        });
    }
    else {
        console.error('Container not found.');
    }
}
// Call the function to create and append blog elements
createBlogElements();
