import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import ExploreMenu from "./ExploreMenu";

/* ------------------------------------------------------------------ */
/*  Static Data                                                        */
/* ------------------------------------------------------------------ */

const partners = [
  { name: "Google", logo: "/partners/google.png" },
  { name: "IBM", logo: "/partners/ibm.png" },
  { name: "Microsoft", logo: "/partners/microsoft.png" },
  { name: "University of Illinois", logo: "/partners/illinois.png" },
  { name: "OpenAI", logo: "/partners/openai.png" },
  { name: "Anthropic", logo: "/partners/anthropic.png" },
  { name: "DeepLearning.AI", logo: "/partners/deeplearning-ai.png" },
  { name: "Stanford University", logo: "/partners/stanford.png" },
  { name: "University of Pennsylvania", logo: "/partners/penn.png" },
  { name: "University of Michigan", logo: "/partners/umich.png" },
];

const heroCards = [
  {
    title: "Launch a new career",
    href: "/career-academy",
    gradient: "from-purple-50 to-pink-50",
    image: "/icons/Union.svg",
  },
  {
    title: "Gain in-demand skills",
    href: "/browse",
    gradient: "from-blue-50 to-cyan-50",
    image: "/icons/Certificate.svg",
  },
  {
    title: "Earn a degree",
    href: "/degrees",
    gradient: "from-indigo-50 to-purple-50",
    image: "/icons/GraduationCap.svg",
  },
];

const careers = [
  {
    key: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    slug: "machine-learning-engineer",
    bg: "#fef9c3",
    id: "599o30wORCv3HfGL69jCc3",
    hash: "6f765c21b0030a065e71dfdf14686764",
    file: "Machine_Learning_Engineer-role-card_2x.png",
    description:
      "A Machine Learning Engineer builds and optimizes algorithms that enable computers to learn from data, using large datasets and neural networks.",
  },
  {
    key: "data-scientist",
    title: "Data Scientist",
    slug: "data-scientist",
    bg: "#fef9c3",
    id: "2okXQwMsMaDLsff3uh3uUz",
    hash: "c619cf8860813538a005dbea25425df5",
    file: "Data_Scientist-role-card_2x.png",
    description:
      "A Data Scientist analyzes large datasets to uncover insights, using statistics, machine learning, and visualization to inform business strategies.",
  },
  {
    key: "data-analyst",
    title: "Data Analyst",
    slug: "data-analyst",
    bg: "#fef9c3",
    id: "1Z2h61l00YMxiMD8Xu7sHw",
    hash: "669880819cd3c5eac5a5fd08606679d1",
    file: "data-analyst-role-card_2x.png",
    description:
      "A Data Analyst collects, cleans, and interprets data, using tools like Excel, SQL, and Tableau to analyze trends and provide insights for decisions.",
  },
  {
    key: "python-developer",
    title: "Python Developer",
    slug: "python-developer",
    bg: "#dbeafe",
    id: "6P1lduhkejcpwRSf4ZoXNo",
    hash: "f6ba11098ae471839b228b5f800c47a1",
    file: "python-developer-role-card_1X.png",
    description:
      "A Python Developer specializes in writing server-side web application logic.",
  },
  {
    key: "cyber-security-analyst",
    title: "Cyber Security Analyst",
    slug: "cyber-security-analyst",
    bg: "#e0f2fe",
    id: "WslreKdXXAeCwERKLCllJ",
    hash: "64064536b4aba8be21f8cb5e9d4cf697",
    file: "Cyber_Security_Analyst-role-card_2x.png",
    description:
      "A Cyber Security Analyst monitors IT systems, analyzes threats, finds vulnerabilities, and implements measures to protect data from cyber attacks.",
  },
];

function careerImgUrl(c: (typeof careers)[number], dpr: number) {
  return `https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/${c.id}/${c.hash}/${c.file}?auto=format%2Ccompress&dpr=${dpr}&w=305&h=125`;
}

const categories = [
  { name: "Business", href: "/browse/business", icon: "M3.5 17c-.413 0-.766-.147-1.06-.44A1.445 1.445 0 012 15.5v-9c0-.412.147-.766.44-1.06.294-.293.647-.44 1.06-.44H7V3.496c0-.414.147-.767.441-1.058A1.452 1.452 0 018.501 2h3.004c.413 0 .766.147 1.057.44.292.294.438.647.438 1.06V5h3.5c.413 0 .766.147 1.06.44.293.294.44.647.44 1.06v9c0 .412-.147.766-.44 1.06-.294.293-.647.44-1.06.44h-13zm0-1.5h13v-9h-13v9zM8.5 5h3V3.5h-3V5z" },
  { name: "Artificial Intelligence", href: "/explore/generative-ai", icon: "M14.925 3.174a.28.28 0 00-.517 0l-.403.987a.93.93 0 01-.51.51l-.988.404a.28.28 0 000 .517l.988.403a.93.93 0 01.51.51l.403.988a.28.28 0 00.517 0l.403-.988a.931.931 0 01.51-.51l.988-.403a.28.28 0 000-.517l-.988-.404a.931.931 0 01-.51-.51l-.403-.987zM9.654 4.845a.466.466 0 00-.863 0L7.936 6.94a4.66 4.66 0 01-2.552 2.553l-2.094.854a.466.466 0 000 .863l2.094.855a4.66 4.66 0 012.552 2.552l.855 2.094a.466.466 0 00.863 0l.854-2.094a4.66 4.66 0 012.553-2.552l2.094-.855a.466.466 0 000-.863l-2.094-.854a4.66 4.66 0 01-2.553-2.553l-.854-2.094z" },
  { name: "Data Science", href: "/browse/data-science", icon: "M2.542 15.354a.768.768 0 01-.24-.531.693.693 0 01.219-.531l4.27-4.271a1.447 1.447 0 011.063-.438c.417 0 .77.146 1.063.438l2.104 2.104 4.416-4.396H13.75a.728.728 0 01-.534-.214.72.72 0 01-.216-.531c0-.212.072-.39.216-.536a.72.72 0 01.534-.219h3.5c.212 0 .39.072.534.216a.726.726 0 01.216.534v3.5c0 .213-.072.39-.215.535a.719.719 0 01-.53.215.745.745 0 01-.536-.21.691.691 0 01-.22-.519V8.792l-4.416 4.416a1.446 1.446 0 01-1.062.438c-.417 0-.771-.146-1.063-.438l-2.104-2.125-4.25 4.271a.729.729 0 01-1.062 0z" },
  { name: "Computer Science", href: "/browse/computer-science", icon: "M4.125 10l3.417 3.417a.729.729 0 010 1.062.73.73 0 01-1.07-.007l-3.951-3.951a.756.756 0 01-.208-.525c0-.1.017-.194.052-.281a.691.691 0 01.156-.236l3.958-3.958a.733.733 0 011.063 0 .733.733 0 010 1.062L4.125 10zm11.75 0l-3.417-3.417a.73.73 0 010-1.062.73.73 0 011.07.007l3.951 3.951a.756.756 0 01.208.525c0 .1-.017.194-.052.281a.69.69 0 01-.156.236l-3.958 3.958a.663.663 0 01-.517.219.761.761 0 01-.525-.24.733.733 0 010-1.062L15.875 10z" },
  { name: "Information Technology", href: "/browse/information-technology", icon: "M.75 17a.728.728 0 01-.534-.214.72.72 0 01-.216-.532c0-.21.072-.39.216-.535A.72.72 0 01.75 15.5H2v-11c0-.412.147-.766.44-1.06.294-.293.647-.44 1.06-.44h13c.413 0 .766.147 1.06.44.293.294.44.648.44 1.06v11h1.25c.212 0 .39.072.534.214a.72.72 0 01.216.532c0 .21-.072.39-.216.535a.72.72 0 01-.534.219H.75zm7.751-2h3.007c.134 0 .249-.05.346-.15a.487.487 0 00-.004-.7.48.48 0 00-.351-.15H8.492a.467.467 0 00-.346.15.486.486 0 00.004.7c.1.1.217.15.351.15zM3.5 13h13V4.5h-13V13z" },
  { name: "Personal Development", href: "/browse/personal-development", icon: "M6.646 9.146c.194-.39.406-.768.635-1.136.23-.368.469-.732.719-1.093L6.854 6.77 5.021 8.604l1.625.542zm9.479-5.625a6.51 6.51 0 00-3.083.854 11.716 11.716 0 00-2.604 2c-.528.528-1 1.09-1.417 1.687-.417.598-.792 1.23-1.125 1.896l2.125 2.125a15.14 15.14 0 001.896-1.125 12.5 12.5 0 001.687-1.416 12.324 12.324 0 002.031-2.688c.563-1 .844-2 .844-3a.277.277 0 00-.031-.125.395.395 0 00-.073-.104.2.2 0 00-.104-.083.46.46 0 00-.146-.021zm-4.688 5.041A1.446 1.446 0 0111 7.5c0-.417.146-.77.438-1.063A1.447 1.447 0 0112.5 6c.417 0 .77.146 1.063.437.291.292.437.646.437 1.063 0 .417-.146.77-.438 1.062A1.447 1.447 0 0112.5 9c-.417 0-.77-.146-1.063-.438zm-.583 4.792l.542 1.625 1.833-1.833L13.083 12c-.36.25-.725.49-1.093.719-.369.229-.747.44-1.136.635zm7.084-10.5a7.327 7.327 0 01-.657 4.125 12.536 12.536 0 01-2.49 3.521l-.176.177c-.049.049-.101.108-.157.177l.25 2.104c.028.236.004.466-.073.688a1.34 1.34 0 01-.364.562L11.5 16.98a.714.714 0 01-.656.198.572.572 0 01-.469-.427l-1.063-3.23L6.5 10.689 3.25 9.582a.552.552 0 01-.417-.468.69.69 0 01.209-.636l2.75-2.77a1.48 1.48 0 011.25-.438l2.104.27c.07-.069.135-.131.198-.187.062-.055.128-.118.198-.187a13.047 13.047 0 013.5-2.48 7.01 7.01 0 014.083-.645.746.746 0 01.302.104c.09.055.17.118.24.187.07.07.128.146.177.23a.76.76 0 01.093.291zm-14.23 10.25c.43-.444.952-.656 1.563-.635a2.28 2.28 0 011.583.698c.43.43.656.944.677 1.541a1.936 1.936 0 01-.614 1.521 4.3 4.3 0 01-2.26 1.26c-.883.188-1.768.358-2.657.511a92.3 92.3 0 01.5-2.636 4.364 4.364 0 011.208-2.26zm.938 1.188a1.803 1.803 0 00-.48.833l-.25.958c.32-.083.633-.166.938-.25.306-.083.577-.243.813-.479a.823.823 0 00.302-.573.683.683 0 00-.198-.573.67.67 0 00-.563-.198.847.847 0 00-.562.282z" },
  { name: "Healthcare", href: "/browse/healthcare", icon: "M9 10.5v1.438a.55.55 0 00.156.406.55.55 0 00.406.156h.875c.18 0 .32-.052.417-.156a.572.572 0 00.146-.406V10.5h1.437c.18 0 .32-.052.417-.156A.572.572 0 0013 9.938v-.875c0-.181-.049-.32-.146-.417-.097-.097-.236-.146-.417-.146H11V7.063c0-.181-.049-.32-.146-.417-.097-.097-.236-.146-.417-.146h-.875a.571.571 0 00-.406.146c-.104.097-.156.236-.156.417V8.5H7.562a.571.571 0 00-.406.146c-.104.097-.156.236-.156.417v.875a.55.55 0 00.156.406.55.55 0 00.406.156H9zm1 7.417c-.084 0-.167-.004-.25-.01a.789.789 0 01-.23-.053c-1.819-.597-3.277-1.701-4.374-3.312C4.048 12.93 3.5 11.174 3.5 9.27V5.52a1.461 1.461 0 01.958-1.396l5-1.917A1.5 1.5 0 0110 2.104c.18 0 .36.035.541.104l5 1.917a1.462 1.462 0 01.959 1.396v3.75c0 1.903-.549 3.66-1.646 5.27-1.097 1.612-2.556 2.716-4.375 3.313a.788.788 0 01-.23.052c-.083.007-.166.01-.25.01zm0-1.48c1.444-.444 2.639-1.34 3.583-2.687A7.628 7.628 0 0015 9.27V5.52l-5-1.916-5 1.917v3.75c0 1.639.472 3.132 1.416 4.48.945 1.346 2.14 2.242 3.584 2.687z" },
  { name: "Language Learning", href: "/browse/language-learning", icon: "M10 18a7.796 7.796 0 01-3.104-.625 8.064 8.064 0 01-2.552-1.719 8.063 8.063 0 01-1.719-2.552A7.797 7.797 0 012 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 014.27-4.26A7.797 7.797 0 0110 2c1.111 0 2.15.208 3.115.625a8.095 8.095 0 014.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 01-.625 3.104 8.063 8.063 0 01-4.26 4.271A7.774 7.774 0 0110 18zm0-1.563c.236-.236.472-.677.708-1.322.236-.646.417-1.351.542-2.115h-2.5c.125.764.306 1.469.542 2.115.236.645.472 1.086.708 1.322zm-1.896-.208a8.848 8.848 0 01-.51-1.437A15.955 15.955 0 017.229 13H4.25a6.46 6.46 0 001.604 2.031 5.978 5.978 0 002.25 1.198zm3.792 0a5.977 5.977 0 002.25-1.198A6.46 6.46 0 0015.75 13h-2.98c-.096.653-.218 1.25-.364 1.792a8.84 8.84 0 01-.51 1.437zM3.687 11.5h3.355a10.06 10.06 0 01-.052-.781 28.175 28.175 0 010-1.5 8.14 8.14 0 01.052-.719H3.688c-.07.264-.119.517-.146.76a6.508 6.508 0 000 1.48c.027.243.076.496.146.76zm4.876 0h2.874c.028-.278.046-.538.053-.781a25.34 25.34 0 000-1.448c-.007-.25-.025-.507-.053-.771H8.563c-.028.264-.046.52-.053.77a26.254 26.254 0 000 1.46c.007.25.025.506.053.77zm4.395 0h3.354a5.4 5.4 0 00.146-.76 6.504 6.504 0 000-1.49c-.027-.25-.076-.5-.145-.75h-3.355c.028.264.046.524.052.781a27.922 27.922 0 010 1.5 8.112 8.112 0 01-.052.719zM12.771 7h2.979a6.462 6.462 0 00-1.604-2.031 5.978 5.978 0 00-2.25-1.198c.194.417.364.896.51 1.437.146.542.268 1.14.365 1.792zM8.75 7h2.5a11.615 11.615 0 00-.542-2.115C10.472 4.24 10.236 3.8 10 3.563c-.236.236-.472.677-.708 1.322-.236.646-.417 1.351-.542 2.115zm-4.5 0h2.98c.096-.653.218-1.25.364-1.792.146-.541.316-1.02.51-1.437a5.98 5.98 0 00-2.25 1.198A6.462 6.462 0 004.25 7z" },
  { name: "Social Sciences", href: "/browse/social-sciences", icon: "M2 14.083c0-.358.087-.687.26-.987.174-.3.414-.54.72-.721A9.697 9.697 0 018 11c.917 0 1.795.118 2.635.354.84.236 1.636.577 2.386 1.021.305.18.545.42.719.721.173.3.26.63.26.987v.417c0 .412-.147.766-.44 1.06-.295.293-.648.44-1.06.44H3.493c-.413 0-.765-.147-1.057-.44A1.45 1.45 0 012 14.5v-.417zM16.5 16h-1.396c.125-.236.222-.48.292-.733.07-.253.104-.508.104-.767v-.417c0-.583-.135-1.125-.406-1.625s-.636-.91-1.094-1.229c.542.111 1.066.26 1.573.448.507.188.99.42 1.448.698A1.973 1.973 0 0118 14.083v.417c0 .412-.147.766-.44 1.06-.294.293-.647.44-1.06.44zM8 10a2.893 2.893 0 01-2.125-.875A2.893 2.893 0 015 7c0-.833.292-1.542.875-2.125A2.893 2.893 0 018 4c.833 0 1.542.292 2.125.875S11 6.167 11 7s-.292 1.542-.875 2.125A2.893 2.893 0 018 10zm7-3c0 .833-.292 1.542-.875 2.125A2.893 2.893 0 0112 10c-.111 0-.215-.003-.313-.01a1.831 1.831 0 01-.312-.053c.347-.402.621-.85.823-1.343A4.174 4.174 0 0012.5 7c0-.57-.1-1.1-.302-1.594a4.858 4.858 0 00-.823-1.343c.111-.028.215-.046.313-.053.097-.007.2-.01.312-.01.833 0 1.542.292 2.125.875S15 6.167 15 7zM3.5 14.5h9v-.417a.484.484 0 00-.23-.416 8.95 8.95 0 00-2.062-.865A8.183 8.183 0 008 12.5c-.75 0-1.486.097-2.208.292a8.154 8.154 0 00-2.063.875.453.453 0 00-.229.415v.418zm4.504-6c.414 0 .767-.147 1.059-.442.291-.294.437-.649.437-1.062 0-.414-.147-.767-.442-1.059A1.456 1.456 0 007.996 5.5c-.414 0-.767.147-1.059.442A1.456 1.456 0 006.5 7.004c0 .414.147.767.442 1.059.294.291.649.437 1.062.437z" },
  { name: "Arts and Humanities", href: "/browse/arts-and-humanities", icon: "M5.146 17.104a3.767 3.767 0 01-1.76-.427A4.134 4.134 0 012 15.521a1.71 1.71 0 001.104-.48c.306-.29.458-.652.458-1.083 0-.666.23-1.225.691-1.677a2.306 2.306 0 011.677-.677c.658 0 1.212.23 1.664.687.451.458.677 1.014.677 1.667 0 .875-.302 1.618-.906 2.23-.605.61-1.344.916-2.22.916zm0-1.396c.481 0 .893-.171 1.236-.514.343-.342.514-.754.514-1.236a.923.923 0 00-.281-.677.923.923 0 00-.678-.28.923.923 0 00-.677.28.923.923 0 00-.28.677c0 .306-.036.601-.105.886-.07.285-.201.538-.396.76.111.028.222.052.333.073.112.021.223.031.334.031zm4.917-3.541l-2.126-2.125 6.646-6.646a.965.965 0 01.709-.292c.277 0 .514.097.708.292l.708.708c.195.2.292.435.292.703a.947.947 0 01-.292.693l-6.645 6.667z" },
  { name: "Physical Science and Engineering", href: "/browse/physical-science-and-engineering", icon: "M4.5 17c-.639 0-1.097-.281-1.375-.844-.278-.562-.215-1.088.187-1.577L7.5 9.5v-5h-.745a.736.736 0 01-.536-.214A.714.714 0 016 3.754c0-.21.072-.39.216-.535A.72.72 0 016.75 3h6.5c.213 0 .39.071.535.214a.72.72 0 01.215.532c0 .21-.072.39-.215.535a.72.72 0 01-.535.219h-.75v5l4.188 5.083c.389.486.444 1.01.166 1.573-.277.563-.729.844-1.354.844h-11zm0-1.5h11L11 10V4.5H9V10l-4.5 5.5z" },
  { name: "Math and Logic", href: "/browse/math-and-logic", icon: "M7.5 12.5v1a.486.486 0 00.5.5.485.485 0 00.5-.5v-1h1a.485.485 0 00.5-.5.486.486 0 00-.5-.5h-1v-1A.486.486 0 008 10a.485.485 0 00-.5.5v1h-1a.485.485 0 00-.5.5.486.486 0 00.5.5h1zm4 .75h2a.485.485 0 00.5-.5.485.485 0 00-.5-.5h-2a.485.485 0 00-.5.5.485.485 0 00.5.5zm0-1.5h2a.485.485 0 00.5-.5.485.485 0 00-.5-.5h-2a.485.485 0 00-.5.5.485.485 0 00.5.5zm-5-3.48h2a.486.486 0 00.5-.5.486.486 0 00-.5-.5h-2a.486.486 0 00-.5.5.486.486 0 00.5.5zM4.5 17c-.412 0-.766-.147-1.06-.44A1.445 1.445 0 013 15.5v-11c0-.412.147-.766.44-1.06.294-.293.648-.44 1.06-.44h11c.412 0 .766.147 1.06.44.293.294.44.648.44 1.06v11c0 .412-.147.766-.44 1.06-.294.293-.647.44-1.06.44h-11zm0-1.5h11v-11h-11v11zm8-7.02l.708.707a.503.503 0 00.709 0 .482.482 0 00.146-.354.482.482 0 00-.146-.354l-.709-.708.709-.708a.503.503 0 000-.709.503.503 0 00-.708 0l-.709.708-.708-.708a.503.503 0 00-.709 0 .52.52 0 00-.156.354.423.423 0 00.156.354l.709.688-.709.708a.51.51 0 00-.156.344.47.47 0 00.156.365.503.503 0 00.709 0l.708-.688z" },
];

const trendingGroups = [
  {
    label: "Most Popular",
    gradient: "from-blue-50 to-indigo-100",
    courses: [
      {
        title: "Google Data Analytics",
        provider: "Google",
        providerLogo: "/partners/google-logo.png",
        type: "Professional Certificate",
        rating: 4.8,
        thumb: "/courses/google-data-analytics.jpg",
      },
      {
        title: "Foundations: Data, Data, Everywhere",
        provider: "Google",
        providerLogo: "/partners/google-logo.png",
        type: "Course",
        rating: 4.8,
        thumb: "/courses/foundations-data.png",
      },
      {
        title: "Python for Everybody",
        provider: "University of Michigan",
        providerLogo: "/partners/umich.png",
        type: "Specialization",
        rating: 4.8,
        thumb: "/courses/python-for-everybody.jpg",
      },
    ],
  },
  {
    label: "Weekly Spotlight",
    gradient: "from-purple-50 to-pink-100",
    courses: [
      {
        title: "Google Project Management",
        provider: "Google",
        providerLogo: "/partners/google-logo.png",
        type: "Professional Certificate",
        rating: 4.8,
        thumb: "/courses/google-project-management.jpg",
      },
      {
        title: "Microsoft Power BI Data Analyst",
        provider: "Microsoft",
        providerLogo: "/partners/microsoft-logo.png",
        type: "Professional Certificate",
        rating: 4.6,
        thumb: "/courses/microsoft-power-bi.png",
      },
      {
        title: "Intuit Academy Bookkeeping",
        provider: "Intuit",
        providerLogo: "/partners/intuit-logo.png",
        type: "Professional Certificate",
        rating: 4.6,
        thumb: "/courses/intuit-bookkeeping.jpg",
      },
    ],
  },
  {
    label: "In-demand AI Skills",
    gradient: "from-indigo-50 to-blue-100",
    courses: [
      {
        title: "Google AI",
        provider: "Google",
        providerLogo: "/partners/google-logo.png",
        type: "Professional Certificate",
        rating: 4.6,
        thumb: "/courses/google-ai.png",
      },
      {
        title: "Google Prompting Essentials",
        provider: "Google",
        providerLogo: "/partners/google-logo.png",
        type: "Specialization",
        rating: 4.8,
        thumb: "/courses/google-prompting.jpg",
      },
      {
        title: "Google AI Essentials",
        provider: "Google",
        providerLogo: "/partners/google-logo.png",
        type: "Specialization",
        rating: 4.8,
        thumb: "/courses/google-ai-essentials.jpg",
      },
    ],
  },
];

const GOOGLE_LOGO = "/partners/google-logo.png";

const googleCourses = [
  {
    title: "Google AI",
    type: "Professional Certificate",
    rating: 4.6,
    image: "/courses/google-ai-cert.png",
  },
  {
    title: "Google Data Analytics",
    type: "Professional Certificate",
    rating: 4.8,
    image: "/courses/google-data-analytics-lg.jpg",
  },
  {
    title: "Google Project Management",
    type: "Professional Certificate",
    rating: 4.8,
    image: "/courses/google-project-management-lg.jpg",
  },
  {
    title: "Google Cybersecurity",
    type: "Professional Certificate",
    rating: 4.8,
    image: "/courses/google-cybersecurity.png",
  },
];

const learningGoals = [
  {
    key: "start-career",
    label: "Start my career",
    icon: "M20.985 4.417a1.5 1.5 0 00-1.407-1.406c-1.179-.07-4.193.038-6.694 2.538l-.446.451H6.97a1.5 1.5 0 00-1.065.44L2.69 9.656a1.125 1.125 0 00.85 1.896l3.607.504 4.144 4.144.504 3.609a1.125 1.125 0 001.896.849l3.218-3.216a1.5 1.5 0 00.44-1.065V11.56l.447-.447c2.5-2.501 2.608-5.515 2.538-6.695zM12.884 5.549c.72-.725 1.588-1.288 2.543-1.651a8.31 8.31 0 012.998-.387 8.32 8.32 0 01-.387 3c-.363.956-.926 1.824-1.652 2.545L11 15.438 8.56 13l5.324-7.451z",
  },
  {
    key: "change-career",
    label: "Change my career",
    icon: "M22.28 16.72a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 11-1.06-1.06l.97-.97h-1.102a5.25 5.25 0 01-4.494-2.526l-3.91-5.475A3.75 3.75 0 007.296 8.5H3a.75.75 0 010-1.5h4.296a5.25 5.25 0 014.494 2.527l3.91 5.475A3.75 3.75 0 0018.838 17h1.101l-.97-.97a.75.75 0 111.061-1.06l2.25 2.25zM13.406 10.032a.75.75 0 001.046-.175l.113-.157A3.75 3.75 0 0117.703 8h1.101l-.97.97a.75.75 0 101.061 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25a.75.75 0 10-1.06 1.06l.97.97h-1.102a5.25 5.25 0 01-4.494 2.527l-.113.156a.75.75 0 00.175 1.046zM10.594 13.97a.75.75 0 00-1.046.175l-.113.156a3.75 3.75 0 01-3.139 1.699H3a.75.75 0 000 1.5h3.296a5.25 5.25 0 004.494-2.527l.113-.156a.75.75 0 00-.175-1.047z",
  },
  {
    key: "grow-role",
    label: "Grow in my current role",
    icon: "M22.5 5.25v6a.75.75 0 01-1.5 0V7.06l-7.72 7.72a.75.75 0 01-1.06 0L9 11.56l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.22 3.22L19.94 6H15.75a.75.75 0 010-1.5h6a.75.75 0 01.75.75z",
  },
  {
    key: "explore-topics",
    label: "Explore topics outside of work",
    icon: "M22.238 14.237a6.5 6.5 0 01-.22 1.575l-3.9-8.87a.75.75 0 00-.137-.228 3.13 3.13 0 00-4.24.004.75.75 0 00-.24.553V15.75h-3V5.156a.75.75 0 00-.24-.548 3.13 3.13 0 00-4.24-.005.75.75 0 00-.137.228L1.982 13.81a6.51 6.51 0 00-.22 1.576 4.5 4.5 0 109 0V9h3v6.387a4.5 4.5 0 109 0zM7.192 5.6L9 12.399a4.48 4.48 0 00-4.386.069L7.192 5.6zM6 18.75a3 3 0 110-6 3 3 0 010 6zm10.808-13.15l2.578 5.87A4.48 4.48 0 0015 11.398V5.507a2.1 2.1 0 011.808.093zM18 18.75a3 3 0 110-6 3 3 0 010 6z",
  },
];

const certificationCourses = [
  {
    title: "PMP Certification",
    provider: "Pearson",
    providerLogo: "/partners/pearson.png",
    type: "Specialization",
    rating: 4.8,
    image: "/courses/pmp-certification.jpg",
    href: "/specializations/pearson-pmp-certification",
  },
  {
    title: "CompTIA Security+ Certification Preparation",
    provider: "LearnKartS",
    providerLogo: "/partners/learnkarts.png",
    type: "Specialization",
    rating: 4.6,
    image: "/courses/comptia-security.png",
    href: "/specializations/comptia-security-plus-certification",
  },
  {
    title: "CISSP Certified Information Systems Security Professional",
    provider: "Packt",
    providerLogo: "/partners/packt.png",
    type: "Specialization",
    rating: 4.8,
    image: "/courses/cissp.jpg",
    href: "/specializations/packt-cissp-certified-information-systems-security-professional-2024",
  },
  {
    title: "AWS Cloud Solutions Architect",
    provider: "Amazon Web Services",
    providerLogo: "/partners/aws.png",
    type: "Professional Certificate",
    rating: 4.8,
    image: "/courses/aws-cloud-architect.png",
    href: "/professional-certificates/aws-cloud-solutions-architect",
  },
];

const popularByCategory = [
  {
    label: "Popular in Business",
    href: "/browse/business",
    courses: [
      {
        title: "Google Project Management",
        provider: "Google",
        providerLogo: "/partners/google-logo.png",
        type: "Professional Certificate",
        rating: 4.8,
        image: "/courses/popular/google-project-mgmt.jpg",
        href: "/professional-certificates/google-project-management",
      },
      {
        title: "Foundations of Project Management",
        provider: "Google",
        providerLogo: "/partners/google-logo.png",
        type: "Course",
        rating: 4.9,
        image: "/courses/popular/foundations-project-mgmt.jpg",
        href: "/learn/project-management-foundations",
      },
      {
        title: "AI For Everyone",
        provider: "DeepLearning.AI",
        providerLogo: "/partners/deeplearning-ai.png",
        type: "Course",
        rating: 4.8,
        image: "/courses/popular/ai-for-everyone.png",
        href: "/learn/ai-for-everyone",
      },
    ],
  },
  {
    label: "Popular in Data",
    href: "/browse/data-science",
    courses: [
      {
        title: "Python for Data Science, AI & Development",
        provider: "IBM",
        providerLogo: "/partners/ibm.png",
        type: "Course",
        rating: 4.6,
        image: "/courses/popular/python-ds-ibm.jpg",
        href: "/learn/python-for-applied-data-science-ai",
      },
      {
        title: "Introduction to Artificial Intelligence (AI)",
        provider: "IBM",
        providerLogo: "/partners/ibm.png",
        type: "Course",
        rating: 4.7,
        image: "/courses/popular/intro-ai-ibm.png",
        href: "/learn/introduction-to-ai",
      },
      {
        title: "Introduction to Data Analytics",
        provider: "IBM",
        providerLogo: "/partners/ibm.png",
        type: "Course",
        rating: 4.8,
        image: "/courses/popular/intro-data-analytics.jpg",
        href: "/learn/introduction-to-data-analytics",
      },
    ],
  },
  {
    label: "Popular in Tech",
    href: "/browse/computer-science",
    courses: [
      {
        title: "Python for Everybody",
        provider: "University of Michigan",
        providerLogo: "/partners/umich.png",
        type: "Specialization",
        rating: 4.8,
        image: "/courses/popular/python-everybody-spec.jpg",
        href: "/specializations/python",
      },
      {
        title: "Programming for Everybody (Getting Started with Python)",
        provider: "University of Michigan",
        providerLogo: "/partners/umich.png",
        type: "Course",
        rating: 4.8,
        image: "/courses/popular/programming-python.png",
        href: "/learn/python",
      },
      {
        title: "IBM AI Developer",
        provider: "IBM",
        providerLogo: "/partners/ibm.png",
        type: "Professional Certificate",
        rating: 4.6,
        image: "/courses/popular/ibm-ai-developer.png",
        href: "/professional-certificates/applied-artifical-intelligence-ibm-watson-ai",
      },
    ],
  },
];

const testimonials = [
  {
    name: "Sarah W.",
    image: "/images/testimonials/sarah-w.jpg",
    quote:
      "Coursera\u2019s reputation for high-quality content, paired with its flexible structure, made it possible for me to dive into data analytics while managing family, health, and everyday life.",
  },
  {
    name: "Noeris B.",
    image: "/images/testimonials/noeris-b.jpg",
    quote:
      "Coursera rebuilt my confidence and showed me I could dream bigger. It wasn\u2019t just about gaining knowledge\u2014it was about believing in my potential again.",
  },
  {
    name: "Abdullahi M.",
    image: "/images/testimonials/abdullahi-m.jpg",
    quote:
      "I now feel more prepared to take on leadership roles and have already started mentoring some of my colleagues.",
  },
  {
    name: "Anas A.",
    image: "/images/testimonials/anas-a.jpg",
    quote:
      "Learning with Coursera has expanded my professional expertise by giving me access to cutting-edge research, practical tools, and global perspectives.",
  },
];

const faqItems = [
  {
    question: "What is Coursera?",
    answer:
      "Coursera is a global online learning platform that offers courses, certificates, and degrees from top universities and companies like Google, IBM, Stanford, and more. With over 7,000 courses available, you can learn at your own pace and earn credentials recognized by employers worldwide.",
  },
  {
    question: "How much does Coursera cost?",
    answer:
      "Many courses on Coursera are free to audit. To earn a certificate, individual courses typically cost $49\u2013$99. Coursera Plus gives you unlimited access to 90%+ of the catalog for $59/month or $399/year. Professional Certificates and Specializations are included with Coursera Plus.",
  },
  {
    question: "Is it worth getting a Coursera certificate?",
    answer:
      "Yes. Coursera certificates are created in partnership with leading companies and universities. Employers recognize these credentials, and 87% of learners report career benefits such as a promotion, raise, or new job after completing a course.",
  },
  {
    question: "Can I get a job with a Coursera certificate?",
    answer:
      "Absolutely. Google, IBM, Meta, and other top employers have designed Professional Certificates on Coursera specifically to prepare learners for entry-level roles. Many of these programs include direct connections to hiring partners.",
  },
  {
    question: "How long does it take to complete a Coursera course?",
    answer:
      "Individual courses typically take 4\u20136 weeks at a pace of 3\u20135 hours per week. Professional Certificates and Specializations may take 3\u20136 months. You can learn at your own pace and set your own schedule.",
  },
  {
    question: "Are Coursera certificates recognized by employers?",
    answer:
      "Yes. Coursera partners with over 350 leading universities and companies to create courses. Professional Certificates from Google, IBM, Meta, and others are specifically designed to help you land a job, and many employers actively seek candidates with these credentials.",
  },
  {
    question: "What is Coursera Plus?",
    answer:
      "Coursera Plus is a subscription that gives you unlimited access to over 7,000 courses, Professional Certificates, Specializations, and guided projects. It includes a 7-day free trial and costs $59/month or $399/year.",
  },
];



/* ------------------------------------------------------------------ */
/*  Star rating helper                                                 */
/* ------------------------------------------------------------------ */
function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm">
      <span className="font-semibold text-slate-900">{rating}</span>
      <span className="text-amber-400" aria-hidden="true">
        {"★".repeat(Math.floor(rating))}
        {rating % 1 >= 0.5 ? "½" : ""}
      </span>
    </span>
  );
}

/* ================================================================== */
/*  PAGE COMPONENT                                                     */
/* ================================================================== */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ---------------------------------------------------------- */}
      {/* 1. TOP TRUST BAR                                            */}
      {/* ---------------------------------------------------------- */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-center gap-3 sm:gap-6 text-xs">
          <span className="inline-flex items-center gap-1.5">
            <svg className="h-4 w-4 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            30-Day Money-Back Guarantee
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <svg className="h-4 w-4 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            87% Career Success Rate
          </span>
          <span className="inline-flex items-center gap-1.5">
            <svg className="h-4 w-4 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            Cancel Anytime
          </span>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* 2. TAB BAR                                                   */}
      {/* ---------------------------------------------------------- */}
      <div style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center gap-0 overflow-x-auto">
          {[
            { label: "For Individuals", active: true },
            { label: "For Businesses", active: false },
            { label: "For Universities", active: false },
            { label: "For Governments", active: false },
          ].map((tab) => (
            <a
              key={tab.label}
              href="#"
              style={{
                color: tab.active ? "#ffffff" : "#b0c4de",
                borderBottom: tab.active ? "2px solid #ffffff" : "2px solid transparent",
              }}
              className="whitespace-nowrap px-4 py-2.5 text-sm font-medium transition-colors hover:!text-white"
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* 3. HEADER                                                    */}
      {/* ---------------------------------------------------------- */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          color: "#000000",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between h-16 gap-4">
          {/* Left */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <Link href="/" aria-label="CourseHub">
              <span className="text-2xl font-bold text-[#0056D2]">CourseHub</span>
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <ExploreMenu />
              <Link href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">
                Degrees
              </Link>
            </nav>
          </div>

          {/* Center - Search */}
          <div className="hidden sm:flex flex-1 max-w-xl items-center">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="w-full rounded-full border border-slate-600 bg-white py-2 pl-4 pr-12 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
              />
              <button
                type="button"
                aria-label="Search"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#0056D2] p-1.5 text-white hover:bg-[#004bb5]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="hidden sm:inline-flex text-sm font-medium text-slate-700 hover:text-slate-900">
              Log In
            </button>
            <button className="rounded-md border border-[#0056D2] px-4 py-1.5 text-sm font-semibold text-[#0056D2] hover:bg-[#0056D2] hover:text-white transition-colors">
              Join for Free
            </button>
          </div>
        </div>
      </header>

      {/* ---------------------------------------------------------- */}
      {/* 4. HERO CAROUSEL                                             */}
      {/* ---------------------------------------------------------- */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <HeroCarousel />
      </div>

      {/* ---------------------------------------------------------- */}
      {/* 5. HERO ACTION CARDS                                         */}
      {/* ---------------------------------------------------------- */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <section className="w-full pb-4 pt-2">
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-4" role="list">
                {heroCards.map((card) => (
                  <div key={card.title} role="listitem" className="flex-1 min-w-0">
                    <Link
                      href={card.href}
                      className={`flex items-center justify-between h-[80px] sm:h-[100px] rounded-2xl bg-gradient-to-br ${card.gradient} px-5 group hover:shadow-md transition-shadow`}
                    >
                      <span className="sr-only">{card.title}</span>
                      <h2 aria-hidden="true" className="text-base font-semibold text-slate-900">
                        {card.title}
                      </h2>
                      <img
                        src={card.image}
                        alt=""
                        aria-hidden="true"
                        className="h-[50px] w-[50px] opacity-80 flex-shrink-0"
                        width={50}
                        height={50}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* 6. PARTNERS SECTION                                          */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-white py-5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-left text-xl font-semibold text-slate-900 mb-4">
            Learn from 350+ leading universities and companies
          </h2>
          <div className="relative group">
            <div className="overflow-hidden">
              <div className="flex items-center gap-3 pb-2 overflow-x-auto scrollbar-hide">
                {partners.map((p) => (
                  <span
                    key={p.name}
                    className="flex-shrink-0 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="h-6 w-6 object-contain"
                      width={24}
                      height={24}
                    />
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
            {/* Scroll arrows */}
            <button
              aria-label="Previous"
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white border border-slate-200 shadow p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span className="sr-only">Previous</span>
              <svg className="h-4 w-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              aria-label="Next"
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white border border-slate-200 shadow p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span className="sr-only">Next</span>
              <svg className="h-4 w-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 7. TRENDING COURSES                                          */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-white py-5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Trending Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {trendingGroups.map((group) => (
              <div
                key={group.label}
                className={`rounded-2xl bg-gradient-to-br ${group.gradient} p-4`}
              >
                <h3 className="text-base font-semibold text-slate-900 mb-3">{group.label}</h3>
                <div className="space-y-2">
                  {group.courses.map((course) => (
                    <div
                      key={course.title}
                      className="flex gap-3 p-3 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <img
                        src={course.thumb}
                        alt=""
                        className="h-14 w-14 rounded-lg object-cover flex-shrink-0"
                        width={56}
                        height={56}
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <img src={course.providerLogo} alt="" className="h-4 w-4 rounded-full" width={16} height={16} style={{ border: "1px solid rgba(0,0,0,0.08)" }} />
                          <p className="text-xs text-slate-500">{course.provider}</p>
                        </div>
                        <p className="text-sm font-medium text-slate-900 leading-tight line-clamp-2">
                          {course.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">{course.type}</p>
                        <Stars rating={course.rating} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 7b. EXPLORE CATEGORIES                                       */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-white py-5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-left text-xl font-semibold text-slate-900 mb-3">
            Explore Categories
          </h2>
          <div className="flex flex-wrap items-center gap-3" role="list">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                role="listitem"
                className="inline-flex items-center gap-1.5 rounded-full border border-transparent bg-[#F5F7FA] px-4 py-2 text-sm font-medium text-slate-700 hover:bg-[#e8edf3] hover:text-[#0056d2] transition-colors"
              >
                <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" className="flex-shrink-0">
                  <path d={cat.icon} fill="currentColor" />
                </svg>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 8. GOOGLE EXPERTS                                            */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-white py-5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div
            className="rounded-2xl overflow-hidden p-3 sm:p-4"
            style={{
              background: "linear-gradient(105deg, #1A73E8 0%, #3B9DD0 40%, #5CBFA5 70%, #8DD5B8 100%)",
            }}
          >
            {/* Flex container: stacked on small, side-by-side on wide */}
            <div className="flex flex-col xl:flex-row xl:items-center xl:gap-6">
              {/* Title & CTA */}
              <div className="mb-2.5 xl:mb-0 xl:flex-shrink-0 xl:w-[200px]">
                {/* Small screens: inline link with arrow */}
                <Link
                  href="/google-career-certificates"
                  className="inline-flex items-center gap-1.5 hover:underline xl:hidden"
                  style={{ color: "#ffffff" }}
                >
                  <h2 className="text-[18px] sm:text-[20px] font-bold leading-snug" style={{ color: "#ffffff" }}>
                    Learn from Google Experts
                  </h2>
                  <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" className="flex-shrink-0">
                    <path d="M13.125 10.75H4.75a.728.728 0 01-.535-.214.72.72 0 01-.215-.532c0-.21.072-.39.215-.535a.72.72 0 01.535-.219h8.375L9.454 5.579a.721.721 0 01-.225-.527c0-.201.077-.382.23-.541a.745.745 0 011.058.006l4.954 4.96a.722.722 0 01.216.526.76.76 0 01-.052.282.692.692 0 01-.156.236l-4.958 4.958a.681.681 0 01-.521.219.776.776 0 01-.52-.23.766.766 0 01-.23-.544.71.71 0 01.23-.528l3.645-3.646z" fill="currentColor" />
                  </svg>
                </Link>
                {/* Wide screens: title + button stacked */}
                <div className="hidden xl:block">
                  <h2 className="text-[17px] xl:text-[15px] font-bold leading-snug text-white mb-4">
                    Learn from Google Experts
                  </h2>
                  <Link
                    href="/google-career-certificates"
                    className="inline-flex items-center gap-1.5 rounded-md bg-white px-4 py-2 text-sm xl:text-blue-600 font-semibold text-[#0056D2] hover:bg-slate-100 transition-colors"
                  >
                    Explore courses
                    <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" className="flex-shrink-0">
                      <path d="M13.125 10.75H4.75a.728.728 0 01-.535-.214.72.72 0 01-.215-.532c0-.21.072-.39.215-.535a.72.72 0 01.535-.219h8.375L9.454 5.579a.721.721 0 01-.225-.527c0-.201.077-.382.23-.541a.745.745 0 011.058.006l4.954 4.96a.722.722 0 01.216.526.76.76 0 01-.052.282.692.692 0 01-.156.236l-4.958 4.958a.681.681 0 01-.521.219.776.776 0 01-.52-.23.766.766 0 01-.23-.544.71.71 0 01.23-.528l3.645-3.646z" fill="currentColor" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Card Grid */}
              <div className="relative group/carousel flex-1 min-w-0">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5" role="list">
                    {googleCourses.map((gc) => (
                      <div
                        key={gc.title}
                        role="listitem"
                        className="rounded-xl bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                        style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                      >
                        {/* Card image */}
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={gc.image}
                            alt={gc.title}
                            className="w-full h-full object-cover object-center"
                            width={320}
                            height={180}
                          />
                        </div>
                        {/* Card content */}
                        <div className="p-3">
                          <div className="flex items-center gap-1.5 mb-1">
                            <img
                              src={GOOGLE_LOGO}
                              alt=""
                              className="h-5 w-5 rounded-full"
                              style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                              width={20}
                              height={20}
                            />
                            <span className="text-sm text-[#636363]">Google</span>
                          </div>
                          <h3 className="text-[15px] font-semibold text-[#1f1f1f] leading-snug">
                            {gc.title}
                          </h3>
                          <p className="text-sm text-[#636363] mt-0.5">{gc.type}</p>
                          <div className="flex items-center gap-1 mt-1.5">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 20 20" width="16" className="text-[#e8a838]">
                              <path d="M10 14.063l-3.417 2.041a.747.747 0 01-.833-.042.752.752 0 01-.25-.343.706.706 0 01-.02-.448l.895-3.813-3.02-2.562a.68.68 0 01-.23-.386.887.887 0 01.02-.427.687.687 0 01.23-.343.741.741 0 01.417-.157L7.75 7.23l1.563-3.625A.754.754 0 0110 3.146a.747.747 0 01.688.458L12.25 7.25l3.958.333c.167.014.306.07.417.167a.771.771 0 01.24.77.74.74 0 01-.24.376l-3 2.562.896 3.813a.706.706 0 01-.02.448.752.752 0 01-.25.344.747.747 0 01-.834.041L10 14.063z" fill="currentColor" />
                            </svg>
                            <span className="text-sm font-medium text-[#1f1f1f]">{gc.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 9. MAIN CONTENT                                              */}
      {/* ---------------------------------------------------------- */}
      <main className="relative bg-white text-slate-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 max-w-[1440px] mx-auto">
          {/* ------------------------------------------------------ */}
          {/* 9a. EXPLORE CAREERS                                      */}
          {/* ------------------------------------------------------ */}
          <section className="mb-8 mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-xl font-semibold text-slate-900">Explore careers</h2>
              <Link
                href="/career-academy"
                className="inline-flex items-center gap-1 text-[#0056d2] font-semibold text-sm hover:underline"
              >
                Explore all
                <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 20 20" width="16" className="text-[#0056d2]">
                  <path d="M13.125 10.75H4.75a.728.728 0 01-.535-.214.72.72 0 01-.215-.532c0-.21.072-.39.215-.535a.72.72 0 01.535-.219h8.375L9.454 5.579a.721.721 0 01-.225-.527c0-.201.077-.382.23-.541a.745.745 0 011.058.006l4.954 4.96a.722.722 0 01.216.526.76.76 0 01-.052.282.692.692 0 01-.156.236l-4.958 4.958a.681.681 0 01-.521.219.776.776 0 01-.52-.23.766.766 0 01-.23-.544.71.71 0 01.23-.528l3.645-3.646z" fill="currentColor" />
                </svg>
              </Link>
            </div>
            <div className="overflow-x-auto scrollbar-hide min-[1281px]:overflow-visible">
              <div className="flex gap-4 min-w-[min-content] min-[1281px]:grid min-[1281px]:grid-cols-5 min-[1281px]:min-w-0">
                {careers.map((career) => {
                  const roleHref = `/career-academy/roles/${career.slug}`;
                  return (
                    <Link
                      key={career.key}
                      href={roleHref}
                      className="group block rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex-shrink-0 w-[calc(25%-12px)] min-[1281px]:w-auto"
                    >
                      {/* Image area */}
                      <div
                        className="relative h-[125px] overflow-hidden"
                        style={{ backgroundColor: career.bg }}
                      >
                        <img
                          src={careerImgUrl(career, 1)}
                          srcSet={`${careerImgUrl(career, 1)} 1x, ${careerImgUrl(career, 2)} 2x, ${careerImgUrl(career, 3)} 3x`}
                          alt={career.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          width={305}
                          height={125}
                        />
                      </div>
                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-semibold text-slate-900 text-[15px] leading-tight">
                          {career.title}
                        </h3>
                        {career.description ? (
                          <p className="text-[13px] text-slate-500 mt-2 leading-relaxed line-clamp-2">
                            {career.description}
                          </p>
                        ) : null}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------ */}
          {/* 9b. WHAT BRINGS YOU TO COURSERA                         */}
          {/* ------------------------------------------------------ */}
          <section className="mb-8 mx-auto">
            <div className="rounded-2xl bg-[#E8F0FE] px-6 py-5 sm:px-8 sm:py-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                <h2 className="text-lg font-bold text-slate-900 whitespace-nowrap flex-shrink-0">
                  What brings you to Coursera today?
                </h2>
                <div className="flex flex-wrap lg:flex-nowrap gap-2">
                  {learningGoals.map((goal) => (
                    <button
                      key={goal.key}
                      className="flex items-center gap-2 rounded-full bg-white border border-slate-200 pl-1.5 pr-3 py-1.5 text-left hover:shadow-md hover:border-slate-300 transition-all"
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-md bg-[#0056D2] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d={goal.icon} fill="currentColor" />
                        </svg>
                      </span>
                      <span className="text-[13px] font-medium text-slate-900 whitespace-nowrap">{goal.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------ */}
          {/* 9c. CERTIFICATION EXAM PREP                              */}
          {/* ------------------------------------------------------ */}
          <section className="mb-8 mx-auto">
            <div
              className="rounded-2xl overflow-hidden p-3 sm:p-4"
              style={{
                background: "linear-gradient(105deg, #1F2937 0%, #374151 40%, #4B5563 70%, #6B7280 100%)",
              }}
            >
              <div className="flex flex-col xl:flex-row xl:items-center xl:gap-6">
                {/* Title & CTA */}
                <div className="mb-2.5 xl:mb-0 xl:flex-shrink-0 xl:w-[200px]">
                  <Link
                    href="/explore/certification-preparation-courses"
                    className="inline-flex items-center gap-1.5 hover:underline xl:hidden"
                    style={{ color: "#ffffff" }}
                  >
                    <h2 className="text-[18px] sm:text-[20px] font-bold leading-snug" style={{ color: "#ffffff" }}>
                      Prepare for an industry certification exam
                    </h2>
                    <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" className="flex-shrink-0">
                      <path d="M13.125 10.75H4.75a.728.728 0 01-.535-.214.72.72 0 01-.215-.532c0-.21.072-.39.215-.535a.72.72 0 01.535-.219h8.375L9.454 5.579a.721.721 0 01-.225-.527c0-.201.077-.382.23-.541a.745.745 0 011.058.006l4.954 4.96a.722.722 0 01.216.526.76.76 0 01-.052.282.692.692 0 01-.156.236l-4.958 4.958a.681.681 0 01-.521.219.776.776 0 01-.52-.23.766.766 0 01-.23-.544.71.71 0 01.23-.528l3.645-3.646z" fill="currentColor" />
                    </svg>
                  </Link>
                  <div className="hidden xl:block">
                    <h2 className="text-[15px] font-bold leading-snug text-white mb-4">
                      Prepare for an industry certification exam
                    </h2>
                    <Link
                      href="/explore/certification-preparation-courses"
                      className="inline-flex items-center gap-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#1F2937] hover:bg-slate-100 transition-colors"
                    >
                      Explore courses
                      <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" className="flex-shrink-0">
                        <path d="M13.125 10.75H4.75a.728.728 0 01-.535-.214.72.72 0 01-.215-.532c0-.21.072-.39.215-.535a.72.72 0 01.535-.219h8.375L9.454 5.579a.721.721 0 01-.225-.527c0-.201.077-.382.23-.541a.745.745 0 011.058.006l4.954 4.96a.722.722 0 01.216.526.76.76 0 01-.052.282.692.692 0 01-.156.236l-4.958 4.958a.681.681 0 01-.521.219.776.776 0 01-.52-.23.766.766 0 01-.23-.544.71.71 0 01.23-.528l3.645-3.646z" fill="currentColor" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Card Grid */}
                <div className="relative flex-1 min-w-0">
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5" role="list">
                      {certificationCourses.map((course) => (
                        <Link
                          key={course.title}
                          href={course.href}
                          role="listitem"
                          className="rounded-xl bg-white overflow-hidden hover:shadow-lg transition-shadow"
                          style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                        >
                          <div className="aspect-[16/9] overflow-hidden">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover object-center"
                              width={320}
                              height={180}
                            />
                          </div>
                          <div className="p-3">
                            <div className="flex items-center gap-1.5 mb-1">
                              <img
                                src={course.providerLogo}
                                alt=""
                                className="h-5 w-5 rounded-full"
                                style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                                width={20}
                                height={20}
                              />
                              <span className="text-sm text-[#636363]">{course.provider}</span>
                            </div>
                            <h3 className="text-[15px] font-semibold text-[#1f1f1f] leading-snug line-clamp-2">
                              {course.title}
                            </h3>
                            <p className="text-sm text-[#636363] mt-0.5">{course.type}</p>
                            <div className="flex items-center gap-1 mt-1.5">
                              <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 20 20" width="16" className="text-[#e8a838]">
                                <path d="M10 14.063l-3.417 2.041a.747.747 0 01-.833-.042.752.752 0 01-.25-.343.706.706 0 01-.02-.448l.895-3.813-3.02-2.562a.68.68 0 01-.23-.386.887.887 0 01.02-.427.687.687 0 01.23-.343.741.741 0 01.417-.157L7.75 7.23l1.563-3.625A.754.754 0 0110 3.146a.747.747 0 01.688.458L12.25 7.25l3.958.333c.167.014.306.07.417.167a.771.771 0 01.24.77.74.74 0 01-.24.376l-3 2.562.896 3.813a.706.706 0 01-.02.448.752.752 0 01-.25.344.747.747 0 01-.834.041L10 14.063z" fill="currentColor" />
                              </svg>
                              <span className="text-sm font-medium text-[#1f1f1f]">{course.rating}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------ */}
          {/* 9d. MOST POPULAR BY CATEGORY                             */}
          {/* ------------------------------------------------------ */}
          <section className="mb-8 mx-auto">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Most popular by category
            </h2>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 min-w-[min-content] lg:grid lg:grid-cols-3 lg:min-w-0">
                {popularByCategory.map((cat) => (
                  <div
                    key={cat.label}
                    className="min-w-[360px] lg:min-w-0 rounded-2xl border border-slate-200 bg-[#F5F7FA] p-4"
                  >
                    <Link
                      href={cat.href}
                      className="inline-flex items-center gap-1 text-slate-900 font-bold text-[15px] hover:text-[#0056d2] transition-colors mb-3"
                    >
                      {cat.label}
                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 20 20" width="16" className="flex-shrink-0">
                        <path d="M13.125 10.75H4.75a.728.728 0 01-.535-.214.72.72 0 01-.215-.532c0-.21.072-.39.215-.535a.72.72 0 01.535-.219h8.375L9.454 5.579a.721.721 0 01-.225-.527c0-.201.077-.382.23-.541a.745.745 0 011.058.006l4.954 4.96a.722.722 0 01.216.526.76.76 0 01-.052.282.692.692 0 01-.156.236l-4.958 4.958a.681.681 0 01-.521.219.776.776 0 01-.52-.23.766.766 0 01-.23-.544.71.71 0 01.23-.528l3.645-3.646z" fill="currentColor" />
                      </svg>
                    </Link>
                    <div className="space-y-2">
                      {cat.courses.map((course) => (
                        <Link
                          key={course.title}
                          href={course.href}
                          className="flex gap-3 p-3 rounded-xl bg-white hover:shadow-md transition-shadow"
                        >
                          <img
                            src={course.image}
                            alt=""
                            className="h-16 w-16 rounded-lg object-cover flex-shrink-0"
                            width={64}
                            height={64}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <img
                                src={course.providerLogo}
                                alt=""
                                className="h-4 w-4 rounded-full"
                                width={16}
                                height={16}
                                style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                              />
                              <p className="text-xs text-slate-500">{course.provider}</p>
                            </div>
                            <h3 className="text-sm font-semibold text-slate-900 leading-tight line-clamp-1 mt-0.5">
                              {course.title}
                            </h3>
                            <div className="flex items-center gap-1.5 mt-1">
                              <span className="text-xs text-slate-500">{course.type}</span>
                              <span className="text-xs text-slate-400">&middot;</span>
                              <Stars rating={course.rating} />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------ */}
          {/* 9e. COURSERA PLUS & BUSINESS PROMO                       */}
          {/* ------------------------------------------------------ */}
          <section className="mb-8 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Coursera Plus Card */}
              <Link
                href="/courseraplus"
                className="group relative flex flex-col justify-between rounded-2xl overflow-hidden p-6 min-h-[260px]"
                style={{ background: "linear-gradient(135deg, #0747A6 0%, #0056D2 100%)" }}
              >
                <div className="relative z-10">
                  <img
                    src="/images/promo/coursera-plus-logo.png"
                    alt="Coursera Plus"
                    className="h-6 mb-3"
                    height={24}
                  />
                  <h3 className="text-lg font-bold text-white leading-snug max-w-[260px]">
                    Unlock access to 10,000+ courses with a subscription
                  </h3>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-white group-hover:underline">
                    Start 7-day free trial
                    <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20">
                      <path d="M13.125 10.75H4.75a.728.728 0 01-.535-.214.72.72 0 01-.215-.532c0-.21.072-.39.215-.535a.72.72 0 01.535-.219h8.375L9.454 5.579a.721.721 0 01-.225-.527c0-.201.077-.382.23-.541a.745.745 0 011.058.006l4.954 4.96a.722.722 0 01.216.526.76.76 0 01-.052.282.692.692 0 01-.156.236l-4.958 4.958a.681.681 0 01-.521.219.776.776 0 01-.52-.23.766.766 0 01-.23-.544.71.71 0 01.23-.528l3.645-3.646z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
                <img
                  src="/images/promo/coursera-plus-card.png"
                  alt=""
                  className="absolute right-0 bottom-0 h-[200px] w-auto object-contain"
                  height={200}
                />
              </Link>

              {/* Coursera for Business Card */}
              <Link
                href="/business"
                className="group relative flex flex-col justify-between rounded-2xl overflow-hidden p-6 min-h-[260px]"
                style={{ background: "linear-gradient(135deg, #1F2937 0%, #374151 100%)" }}
              >
                <div className="relative z-10">
                  <img
                    src="/images/promo/coursera-business-logo.png"
                    alt="Coursera for Business"
                    className="h-5 mb-3"
                    height={20}
                  />
                  <h3 className="text-lg font-bold text-white leading-snug max-w-[280px]">
                    Drive your business forward and empower your teams
                  </h3>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-white group-hover:underline">
                    Try Coursera for Business
                    <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20">
                      <path d="M13.125 10.75H4.75a.728.728 0 01-.535-.214.72.72 0 01-.215-.532c0-.21.072-.39.215-.535a.72.72 0 01.535-.219h8.375L9.454 5.579a.721.721 0 01-.225-.527c0-.201.077-.382.23-.541a.745.745 0 011.058.006l4.954 4.96a.722.722 0 01.216.526.76.76 0 01-.052.282.692.692 0 01-.156.236l-4.958 4.958a.681.681 0 01-.521.219.776.776 0 01-.52-.23.766.766 0 01-.23-.544.71.71 0 01.23-.528l3.645-3.646z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
                <img
                  src="/images/promo/coursera-business-card.png"
                  alt=""
                  className="absolute right-0 bottom-0 h-[200px] w-auto object-contain"
                  height={200}
                />
              </Link>
            </div>
          </section>

          {/* ------------------------------------------------------ */}
          {/* 9f. WHY PEOPLE CHOOSE COURSERA                           */}
          {/* ------------------------------------------------------ */}
          <section className="mb-8 mx-auto">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Why people choose Coursera
            </h2>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 min-w-[min-content] lg:grid lg:grid-cols-4 lg:min-w-0">
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="flex-shrink-0 w-[300px] lg:w-auto rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-12 w-12 rounded-full object-cover"
                        width={48}
                        height={48}
                      />
                      <h3 className="text-sm font-semibold text-slate-900">{t.name}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------ */}
          {/* 9g. FREQUENTLY ASKED QUESTIONS                            */}
          {/* ------------------------------------------------------ */}
          <section className="mb-8 mx-auto">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Frequently asked questions
            </h2>
            <div className="space-y-0 divide-y divide-slate-200 rounded-xl border border-slate-200 overflow-hidden">
              {faqItems.map((item) => (
                <details key={item.question} className="group bg-white">
                  <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                    {item.question}
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 flex-shrink-0 text-slate-500 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* ---------------------------------------------------------- */}
      {/* 10. FOOTER                                                   */}
      {/* ---------------------------------------------------------- */}
      <footer className="bg-slate-950 text-slate-300 py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* CourseHub */}
            <div className="sm:col-span-2 md:col-span-1">
              <span className="text-lg font-bold text-white">CourseHub</span>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Empowering 90M+ learners worldwide with world-class education from top universities and companies.
              </p>
            </div>
            {/* Learn */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Learn</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/browse" className="hover:text-white transition-colors">Courses</Link></li>
                <li><Link href="/browse" className="hover:text-white transition-colors">Certificates</Link></li>
                <li><Link href="/degrees" className="hover:text-white transition-colors">Degrees</Link></li>
                <li><Link href="/career-academy" className="hover:text-white transition-colors">Career Academy</Link></li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
              </ul>
            </div>
            {/* Support */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-slate-800 text-center text-sm text-slate-500">
            &copy; 2026 CourseHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
