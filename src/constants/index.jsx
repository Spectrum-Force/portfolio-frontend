import { Award, AwardIcon, BookText, BookTextIcon, BriefcaseBusiness, BriefcaseBusinessIcon, CircleUserIcon, EarthLock, EarthLockIcon, GraduationCap, GraduationCapIcon, LayoutDashboard, LogOut, MessageCircleCode } from "lucide-react";


const K = {
    NAVLINKS: [
        {
            icon: < LayoutDashboard />,
            text: "Overview",
            link: "/dashboard"
        },
        {
            icon: <CircleUserIcon />,
            text: "Profile",
            link: "/dashboard/profile"
        },
        {
            icon: <GraduationCap />,
            text: "Education",
            link: "/dashboard/education"
        },
        {
            icon: <EarthLock />,
            text: "Projects",
            link: "/dashboard/projects"
        },
        {
            icon: <BriefcaseBusiness />,
            text: "Experience",
            link: "/dashboard/experience"
        },
        {
            icon: <BookText />,
            text: "Skills",
            link: "/dashboard/skills"
        },
        {
            icon: <Award />,
            text: "Achievements",
            link: "/dashboard/achievements"
        },

        {
            icon: <MessageCircleCode />,
            text: "Socials",
            link: "/dashboard/socials"
        },
        {
           
            text: "Preview",
            link: "/preview"
        },
        {
            icon: < LogOut/>,
            text: "Logout",
             link: "/signup"
        },

    ],

    OVERVIEW: [
        {
            icon: <GraduationCapIcon />,
            text: "Education",
            total: 3,
        },
        {
            icon: <EarthLockIcon />,
            text: "Projects",
            total: 10,
        },
        {
            icon: <BriefcaseBusinessIcon />,
            text: "Experience",
            total: 5,
        },
        {
            icon: <BookTextIcon />,
            text: "Skills",
            total: 4,
        },
        {
            icon: <AwardIcon />,
            text: "Achievements",
            total: 5,
        },

    ],

    SKILLS: [
        {
            name: "HTML",
            levelOfProciency: "Advanced",
        },
        {
            name: "CSS",
            levelOfProciency: "Advanced",
        },
        {
            name: "JavaScript",
            levelOfProciency: "Intermediate",
        },
        {
            name: "TypeScript",
            levelOfProciency: "Beginner",
        },
        {
            name: "React",
            levelOfProciency: "Beginner",
        },
    ],

    EXPERIENCES: [
        {
            company: 'Company A',
            position: 'Frontend Developer',
            duration: 'July 2024 - Present',
            description: 'Focused on creating responsive UI components with React and Tailwind CSS.',
        },
        {
            company: 'Company B',
            position: 'Backend Developer',
            duration: 'Jun 2021 - Dec 2023',
            description: 'Specialized in server-side logic, database management, and API development to support front-end functionalities.',
        },
        {
            company: 'Company C',
            position: 'Software Engineer',
            duration: 'Jan 2020 - Feb 2021',
            description: 'Worked on developing scalable web applications using React and Node.js.',
        },

    ],

    PROJECTS: [
        {
            name: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform with user authentication, product management, and order processing. Built with React, Node.js, Express, and MongoDB.',
            contributors: ['John Doe', 'Jane Smith'],
            institution: 'Tech Solutions Inc.',
            startDate: 'January 1, 2023',
            endDate: 'June 1, 2023',
            
          },
          {
            name: 'Social Media App',
            contributors: ['Emily Brown', 'Michael Johnson'],
            institution: 'Web Apps Ltd.',
            description: 'A social media application with real-time chat, post creation, and user profiles. Developed using React, Firebase, and Tailwind CSS.',
            startDate: 'March 1, 2023',
            endDate: 'December 31, 2023',
            
          },
          {
            name: 'Project Management Tool',
            description: 'A project management tool that allows teams to collaborate, track progress, and manage tasks. Implemented with Vue.js, Laravel, and MySQL.',
            contributors: ['David Lee', 'Sarah Wilson'],
            institution: 'Tech Solutions Inc.',
            startDate: 'July 1, 2023',
            endDate: 'December 31, 2023',
            
          },
    ],

    EDUCATION: [
        {
            institution: 'MEST Africa',
            location: 'Accra',
            program: 'Full Stack Developer Bootcamp',
            qualification: 'Certificate',
            startDate: 'January 2023',
            endDate: 'December 2023',
          },
          {
            institution: 'University of Ghana',
            location: 'Accra',
            program: 'Frontend Development',
            qualification: 'Diploma',
            startDate: 'February 2022',
            endDate: 'November 2022',
          },
          {
            institution: 'University of Ghana',
            location: 'Accra',
            program: 'Backend Development',
            qualification: 'Diploma',
            startDate: 'February 2022',
            endDate: 'November 2022',
          },
    ]
};

export default K;
