interface Blog {
    title: string;    
    date: string;
    description: string;
    slug: string;
    [key: string]: any
}

// type Blog = {
//     title: string;    
//     date: string;
//     description: string;
//     slug: string;
// }

const blogTypes = [
    'Personal',
    'Career',
    'Exploration',
    'Tech',
];

const blogs: Blog[] = [
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
    const container = document.querySelector('.blog-container');

    if (container) {
        blogs.forEach(blog => {
            // Create a new <div> element for each blog
            const blogElement = document.createElement('div');
            blogElement.classList.add('blog-entry'); // Add a CSS class for styling

            // Create HTML content for the blog entry
            blogElement.innerHTML = `
                <h2>${blog.title}</h2>
                <p>Date: ${blog.date}</p>
                <p>${blog.description}</p>
                <a href="${blog.slug}">Read more</a>
            `;

            // Append the new blog element to the container
            container.appendChild(blogElement);
        });
    } else {
        console.error('Container not found.');
    }
}

// Call the function to create and append blog elements
createBlogElements();
