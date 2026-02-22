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

const faqItems: { question: string; answer: React.ReactNode }[] = [
  {
    question:
      "Is Coursera accredited, and are Coursera certificates recognized by employers?",
    answer: (
      <p>
        Coursera partners with accredited universities and leading companies such
        as Google and IBM to offer courses, Specializations, and Professional
        Certificates. Employers widely recognize these credentials because they
        are issued directly by trusted institutions. Learners can build job-ready
        skills with the{" "}
        <Link href="/professional-certificates/google-data-analytics" className="text-[#0056d2] underline">
          Google Data Analytics Professional Certificate
        </Link>
        , the{" "}
        <Link href="/professional-certificates/ibm-data-analyst" className="text-[#0056d2] underline">
          IBM Data Analyst Professional Certificate
        </Link>
        , or start with accredited university content in high-demand fields like{" "}
        <Link href="/courses?query=data+analytics" className="text-[#0056d2] underline">
          data analytics
        </Link>{" "}
        and{" "}
        <Link href="/courses?query=cybersecurity" className="text-[#0056d2] underline">
          cybersecurity
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Is a Coursera certificate worth it?",
    answer: (
      <p>
        For many learners, a Coursera certificate is worth it because it provides
        job-ready skills and a verifiable credential from respected universities
        and companies. Learners commonly transition into roles in project
        management, UX design, and data science through programs such as the{" "}
        <Link href="/professional-certificates/google-project-management" className="text-[#0056d2] underline">
          Google Project Management Professional Certificate
        </Link>
        , the{" "}
        <Link href="/professional-certificates/google-ux-design" className="text-[#0056d2] underline">
          Google UX Design Professional Certificate
        </Link>
        , and the{" "}
        <Link href="/professional-certificates/ibm-data-science" className="text-[#0056d2] underline">
          IBM Data Science Professional Certificate
        </Link>
        . Others enter technical fields by starting with beginner-friendly{" "}
        <Link href="/courses?query=python" className="text-[#0056d2] underline">
          Python
        </Link>{" "}
        or{" "}
        <Link href="/courses?query=generative+ai" className="text-[#0056d2] underline">
          generative AI
        </Link>{" "}
        courses.
      </p>
    ),
  },
  {
    question: "What is Coursera Plus, and is it worth it?",
    answer: (
      <p>
        Coursera Plus is an annual subscription that gives learners unlimited
        access to thousands of courses, Specializations, and Professional
        Certificates. It&apos;s a substantial value for anyone planning to
        complete multiple programs in a year. Learners often use{" "}
        <Link href="/courseraplus" className="text-[#0056d2] underline">
          Coursera Plus
        </Link>{" "}
        to explore in-demand areas, such as AI and analytics, through programs
        like the{" "}
        <Link href="/specializations/ai-essentials-google" className="text-[#0056d2] underline">
          AI Essentials Specialization
        </Link>
        , the{" "}
        <Link href="/professional-certificates/ibm-data-analyst" className="text-[#0056d2] underline">
          IBM Data Analyst Professional Certificate
        </Link>
        , or the{" "}
        <Link href="/professional-certificates/google-cybersecurity" className="text-[#0056d2] underline">
          Google Cybersecurity Professional Certificate
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Does Coursera offer free online courses?",
    answer: (
      <p>
        Yes. Coursera offers thousands of courses that you can preview for free,
        including access to the first module, allowing you to explore the content
        before committing. Learners who want full course access or a certificate
        can join with a 7-day free trial through{" "}
        <Link href="/courseraplus" className="text-[#0056d2] underline">
          Coursera Plus
        </Link>{" "}
        or a subscription-based program. Many learners begin with introductory
        topics, such as{" "}
        <Link href="/courses?query=python" className="text-[#0056d2] underline">
          Python
        </Link>
        ,{" "}
        <Link href="/courses?query=digital+marketing" className="text-[#0056d2] underline">
          digital marketing
        </Link>
        , or{" "}
        <Link href="/courses?query=english+speaking" className="text-[#0056d2] underline">
          English speaking
        </Link>
        , and later move into job-focused programs, like the{" "}
        <Link href="/professional-certificates/google-it-support" className="text-[#0056d2] underline">
          Google IT Support Professional Certificate
        </Link>
        , when they&apos;re ready to complete a credential.
      </p>
    ),
  },
  {
    question: "What are the most popular courses on Coursera?",
    answer: (
      <p>
        Coursera&apos;s best-known courses and certificates are offered by
        leading universities and companies in the fields of AI, data science,
        cybersecurity, and software engineering. Many learners begin with the{" "}
        <Link href="/specializations/machine-learning-introduction" className="text-[#0056d2] underline">
          Machine Learning Specialization
        </Link>{" "}
        or the{" "}
        <Link href="/specializations/deep-learning" className="text-[#0056d2] underline">
          Deep Learning Specialization
        </Link>
        . In contrast, others opt for job-aligned pathways, such as the{" "}
        <Link href="/professional-certificates/google-cybersecurity" className="text-[#0056d2] underline">
          Google Cybersecurity Professional Certificate
        </Link>{" "}
        or the{" "}
        <Link href="/professional-certificates/ai-engineer" className="text-[#0056d2] underline">
          AI Engineer Professional Certificate
        </Link>
        . You can also browse broad areas, such as{" "}
        <Link href="/courses?query=artificial+intelligence" className="text-[#0056d2] underline">
          artificial intelligence
        </Link>
        ,{" "}
        <Link href="/courses?query=sql" className="text-[#0056d2] underline">
          SQL
        </Link>
        , or{" "}
        <Link href="/courses?query=web+development" className="text-[#0056d2] underline">
          web development
        </Link>
        , to find highly rated options.
      </p>
    ),
  },
  {
    question:
      "How can Coursera help me get a job or advance my career?",
    answer: (
      <div>
        <p>
          Coursera offers job-aligned Professional Certificates and
          Specializations designed in collaboration with employers and
          universities to help learners qualify for roles in fields such as
          cybersecurity, UX, data analytics, AI, and business. Programs such as
          the{" "}
          <Link href="/professional-certificates/google-cybersecurity" className="text-[#0056d2] underline">
            Google Cybersecurity Professional Certificate
          </Link>
          , the{" "}
          <Link href="/specializations/google-data-analysis-with-python" className="text-[#0056d2] underline">
            Data Analysis with Python Specialization
          </Link>
          , and the{" "}
          <Link href="/specializations/ui-ux-design" className="text-[#0056d2] underline">
            UI/UX Design Specialization
          </Link>{" "}
          help learners build employer-relevant skills. At the same time, many
          career changers explore areas such as{" "}
          <Link href="/courses?query=product+management" className="text-[#0056d2] underline">
            product management
          </Link>{" "}
          or{" "}
          <Link href="/courses?query=business+analysis" className="text-[#0056d2] underline">
            business analysis
          </Link>{" "}
          as pathways into business and technology roles.
        </p>
        <p className="mt-3">
          Coursera also offers online bachelor&apos;s and master&apos;s degrees
          from accredited universities, which can support long-term career
          advancement in business, computer science, data, and other high-growth
          fields. Learners exploring formal education pathways can browse{" "}
          <Link href="/degrees" className="text-[#0056d2] underline">
            online degrees
          </Link>{" "}
          or view available{" "}
          <Link href="/degrees/bachelors" className="text-[#0056d2] underline">
            bachelor&apos;s programs
          </Link>{" "}
          to find a degree aligned to their career goals.
        </p>
      </div>
    ),
  },
  {
    question:
      "What is Coursera for Business, and how much does it cost?",
    answer: (
      <div>
        <p>
          <Link href="/business" className="text-[#0056d2] underline">
            Coursera for Business
          </Link>{" "}
          is Coursera&apos;s enterprise learning platform designed to help
          organizations reskill and upskill employees with job-relevant training
          from top universities and companies. It comes in two versions:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1.5">
          <li>
            <Link href="/business/teams" className="text-[#0056d2] underline">
              Coursera for Teams
            </Link>{" "}
            – Designed for small teams and growing businesses. It offers access
            to thousands of courses and Professional Certificates for a fixed
            price per user.
          </li>
          <li>
            <Link href="/enterprise" className="text-[#0056d2] underline">
              Coursera for Enterprise
            </Link>{" "}
            – Built for large organizations that need advanced features,
            including analytics, integrations, skills benchmarking, and scalable
            workforce training programs tailored to specific roles.
          </li>
        </ul>
        <p className="mt-3">
          Pricing varies depending on the size of your team and the learning
          needs of your organization. Small businesses can purchase Coursera for
          Teams directly online, while Coursera for Enterprise pricing is custom
          and available through a sales consultation.
        </p>
      </div>
    ),
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
                      className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 pl-1.5 pr-3 py-1.5 text-left hover:shadow-md hover:border-slate-300 transition-all"
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
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Most popular by category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {popularByCategory.map((cat, idx) => (
                <div
                  key={cat.label}
                  className={`rounded-2xl bg-gradient-to-br ${idx === 0 ? "from-blue-50 to-indigo-100" : idx === 1 ? "from-purple-50 to-pink-100" : "from-green-50 to-teal-100"} p-4`}
                >
                  <Link
                    href={cat.href}
                    className="text-base font-semibold text-slate-900 mb-3 inline-flex items-center gap-1 hover:underline"
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
                        className="flex gap-3 p-3 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow"
                      >
                        <img
                          src={course.image}
                          alt=""
                          className="h-14 w-14 rounded-lg object-cover flex-shrink-0"
                          width={56}
                          height={56}
                        />
                        <div className="min-w-0">
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
                          <p className="text-sm font-medium text-slate-900 leading-tight line-clamp-2">
                            {course.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">{course.type}</p>
                          <Stars rating={course.rating} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
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
                className="group relative flex rounded-2xl overflow-hidden min-h-[200px] border border-blue-200"
                style={{ background: "linear-gradient(135deg, #0056D2 0%, #0747A6 50%, #003A8C 100%)" }}
              >
                <div className="relative z-10 flex flex-col justify-between p-6 flex-1 max-w-[60%]">
                  <div>
                    <img
                      src="/images/promo/coursera-plus-logo.png"
                      alt="Coursera Plus"
                      className="h-6 mb-3"
                      height={24}
                    />
                    <h3 className="text-lg font-bold text-white leading-snug">
                      Unlock access to 10,000+ courses with a subscription
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-white group-hover:underline">
                    Start 7-day free trial
                    <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20">
                      <path d="M13.125 10.75H4.75a.728.728 0 01-.535-.214.72.72 0 01-.215-.532c0-.21.072-.39.215-.535a.72.72 0 01.535-.219h8.375L9.454 5.579a.721.721 0 01-.225-.527c0-.201.077-.382.23-.541a.745.745 0 011.058.006l4.954 4.96a.722.722 0 01.216.526.76.76 0 01-.052.282.692.692 0 01-.156.236l-4.958 4.958a.681.681 0 01-.521.219.776.776 0 01-.52-.23.766.766 0 01-.23-.544.71.71 0 01.23-.528l3.645-3.646z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
                <div className="relative w-[40%] flex-shrink-0">
                  <img
                    src="/images/promo/coursera-plus-card.png"
                    alt=""
                    className="absolute right-0 bottom-0 h-full w-auto object-contain object-right-bottom"
                  />
                </div>
              </Link>

              {/* Coursera for Business Card */}
              <Link
                href="/business"
                className="group relative flex rounded-2xl overflow-hidden min-h-[200px] border border-slate-300"
                style={{ background: "linear-gradient(135deg, #0D1B3E 0%, #152244 50%, #1A2A52 100%)" }}
              >
                <div className="relative z-10 flex flex-col justify-between p-6 flex-1 max-w-[60%]">
                  <div>
                    <img
                      src="/images/promo/coursera-business-logo.png"
                      alt="Coursera for Business"
                      className="h-5 mb-3"
                      height={20}
                    />
                    <h3 className="text-lg font-bold text-white leading-snug">
                      Drive your business forward and empower your teams
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-white group-hover:underline">
                    Try Coursera for Business
                    <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20">
                      <path d="M13.125 10.75H4.75a.728.728 0 01-.535-.214.72.72 0 01-.215-.532c0-.21.072-.39.215-.535a.72.72 0 01.535-.219h8.375L9.454 5.579a.721.721 0 01-.225-.527c0-.201.077-.382.23-.541a.745.745 0 011.058.006l4.954 4.96a.722.722 0 01.216.526.76.76 0 01-.052.282.692.692 0 01-.156.236l-4.958 4.958a.681.681 0 01-.521.219.776.776 0 01-.52-.23.766.766 0 01-.23-.544.71.71 0 01.23-.528l3.645-3.646z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
                <div className="relative w-[40%] flex-shrink-0">
                  <img
                    src="/images/promo/coursera-business-card.png"
                    alt=""
                    className="absolute right-0 bottom-0 h-full w-auto object-contain object-right-bottom"
                  />
                </div>
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
            <h2 className="text-lg font-bold text-slate-900 mb-1">
              Frequently asked questions
            </h2>
            <div className="divide-y divide-slate-200 border-t border-slate-200">
              {faqItems.map((item) => (
                <details key={item.question} className="group">
                  <summary className="flex items-center gap-3 cursor-pointer py-3 text-[13px] font-bold text-slate-900 hover:text-slate-700 transition-colors [&::-webkit-details-marker]:hidden list-none">
                    <svg
                      aria-hidden="true"
                      fill="currentColor"
                      focusable="false"
                      height="18"
                      viewBox="0 0 20 20"
                      width="18"
                      className="flex-shrink-0 text-slate-700 transition-transform group-open:rotate-180"
                    >
                      <path d="M9.996 12.75a.756.756 0 01-.281-.052.69.69 0 01-.236-.156L5.528 8.59a.705.705 0 01-.226-.538.769.769 0 01.24-.531.729.729 0 011.062 0L10 10.938l3.417-3.417a.693.693 0 01.531-.219.769.769 0 01.531.24.729.729 0 01-.007 1.068l-3.951 3.932a.756.756 0 01-.525.208z" />
                    </svg>
                    <span>{item.question}</span>
                  </summary>
                  <div className="pl-8 pb-3 text-[13px] text-slate-600 leading-relaxed">
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
      <footer className="bg-white border-t border-slate-200" role="contentinfo">
        {/* SEO Links Section */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Skills */}
            <div>
              <h2 className="text-sm font-bold text-slate-900 mb-1">Skills</h2>
              <ul className="space-y-3 text-sm">
                {[
                  ["Artificial Intelligence (AI)", "/courses?query=artificial+intelligence"],
                  ["Cybersecurity", "/courses?query=cybersecurity"],
                  ["Data Analytics", "/courses?query=data+analytics"],
                  ["Digital Marketing", "/courses?query=digital+marketing"],
                  ["English Speaking", "/courses?query=english+speaking"],
                  ["Generative AI (GenAI)", "/courses?query=generative+ai"],
                  ["Microsoft Excel", "/courses?query=microsoft+excel"],
                  ["Microsoft Power BI", "/courses?query=microsoft+power+bi"],
                  ["Project Management", "/courses?query=project+management"],
                  ["Python", "/courses?query=python"],
                ].map(([label, href]) => (
                  <li key={label}><Link href={href} className="text-slate-600 hover:text-slate-900 hover:underline transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
            {/* Certificates & Programs */}
            <div>
              <h2 className="text-sm font-bold text-slate-900 mb-1">Certificates &amp; Programs</h2>
              <ul className="space-y-3 text-sm">
                {[
                  ["Google Cybersecurity Certificate", "/professional-certificates/google-cybersecurity"],
                  ["Google Data Analytics Certificate", "/professional-certificates/google-data-analytics"],
                  ["Google IT Support Certificate", "/professional-certificates/google-it-support"],
                  ["Google Project Management Certificate", "/professional-certificates/google-project-management"],
                  ["Google UX Design Certificate", "/professional-certificates/google-ux-design"],
                  ["IBM Data Analyst Certificate", "/professional-certificates/ibm-data-analyst"],
                  ["IBM Data Science Certificate", "/professional-certificates/ibm-data-science"],
                  ["Machine Learning Certificate", "/specializations/machine-learning-introduction"],
                  ["Microsoft Power BI Data Analyst Certificate", "/professional-certificates/microsoft-power-bi-data-analyst"],
                  ["UI / UX Design Certificate", "/specializations/ui-ux-design"],
                ].map(([label, href]) => (
                  <li key={label}><Link href={href} className="text-slate-600 hover:text-slate-900 hover:underline transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
            {/* Industries & Careers */}
            <div>
              <h2 className="text-sm font-bold text-slate-900 mb-1">Industries &amp; Careers</h2>
              <ul className="space-y-3 text-sm">
                {[
                  ["Business", "/courses?query=business&topic=Business"],
                  ["Computer Science", "/courses?query=computer+science&topic=Computer+Science"],
                  ["Data Science", "/courses?query=data+science&topic=Data+Science"],
                  ["Education & Teaching", "/courses?query=education&topic=Social+Sciences"],
                  ["Engineering", "/courses?query=engineering"],
                  ["Finance", "/courses?query=finance&skills=Finance"],
                  ["Healthcare", "/courses?query=healthcare"],
                  ["Human Resources (HR)", "/courses?query=hr"],
                  ["Information Technology (IT)", "/courses?query=it"],
                  ["Marketing", "/courses?query=marketing&skills=Marketing"],
                ].map(([label, href]) => (
                  <li key={label}><Link href={href} className="text-slate-600 hover:text-slate-900 hover:underline transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
            {/* Career Resources */}
            <div>
              <h2 className="text-sm font-bold text-slate-900 mb-1">Career Resources</h2>
              <ul className="space-y-3 text-sm">
                {[
                  ["Career Aptitude Test", "/resources/career-quiz"],
                  ["Examples of Strengths and Weaknesses for Job Interviews", "/articles/strengths-and-weaknesses-interview"],
                  ["High-Income Skills to Learn", "/articles/high-income-skills"],
                  ["How Does Cryptocurrency Work?", "/articles/how-does-cryptocurrency-work"],
                  ["How to Highlight Duplicates in Google Sheets", "/articles/tutorial-highlight-duplicates-google-sheets"],
                  ["How to Learn Artificial Intelligence", "/articles/how-to-learn-artificial-intelligence"],
                  ["Popular Cybersecurity Certifications", "/articles/popular-cybersecurity-certifications"],
                  ["Preparing for the PMP Certification", "/articles/the-pmp-certification-a-guide-to-getting-started"],
                  ["Signs You Will Get the Job After an Interview", "/articles/signs-you-will-get-the-job-after-interview"],
                  ["What Is Artificial Intelligence?", "/articles/what-is-artificial-intelligence"],
                ].map(([label, href]) => (
                  <li key={label}><Link href={href} className="text-slate-600 hover:text-slate-900 hover:underline transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Main Footer Section */}
        <div>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-16 pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Coursera */}
              <div>
                <h2 className="text-sm font-bold text-slate-900 mb-1">Coursera</h2>
                <ul className="space-y-3 text-sm">
                  {[
                    ["About", "/about"],
                    ["What We Offer", "/about/how-coursera-works/"],
                    ["Leadership", "/about/leadership"],
                    ["Careers", "#"],
                    ["Catalog", "/browse"],
                    ["Coursera Plus", "/courseraplus"],
                    ["Professional Certificates", "/professional-certificate"],
                    ["MasterTrack\u00AE Certificates", "/mastertrack"],
                    ["Degrees", "/degrees"],
                    ["For Enterprise", "/business"],
                    ["For Government", "/government"],
                    ["For Campus", "/campus"],
                    ["Become a Partner", "#"],
                    ["Social Impact", "#"],
                    ["Free Courses", "#"],
                    ["Share your Coursera learning story", "#"],
                  ].map(([label, href]) => (
                    <li key={label}><Link href={href} className="text-slate-600 hover:text-slate-900 hover:underline transition-colors">{label}</Link></li>
                  ))}
                </ul>
              </div>
              {/* Community */}
              <div>
                <h2 className="text-sm font-bold text-slate-900 mb-1">Community</h2>
                <ul className="space-y-3 text-sm">
                  {[
                    ["Learners", "#"],
                    ["Partners", "#"],
                    ["Beta Testers", "#"],
                    ["Blog", "#"],
                    ["The Coursera Podcast", "#"],
                    ["Tech Blog", "#"],
                  ].map(([label, href]) => (
                    <li key={label}><Link href={href} className="text-slate-600 hover:text-slate-900 hover:underline transition-colors">{label}</Link></li>
                  ))}
                </ul>
              </div>
              {/* More */}
              <div>
                <h2 className="text-sm font-bold text-slate-900 mb-1">More</h2>
                <ul className="space-y-3 text-sm">
                  {[
                    ["Press", "#"],
                    ["Investors", "#"],
                    ["Terms", "#"],
                    ["Privacy", "#"],
                    ["Help", "#"],
                    ["Accessibility", "#"],
                    ["Contact", "#"],
                    ["Articles", "#"],
                    ["Directory", "#"],
                    ["Affiliates", "#"],
                    ["Modern Slavery Statement", "#"],
                    ["Cookies Preference Center", "#"],
                  ].map(([label, href]) => (
                    <li key={label}><Link href={href} className="text-slate-600 hover:text-slate-900 hover:underline transition-colors">{label}</Link></li>
                  ))}
                </ul>
              </div>
              {/* App Badges & B Corp */}
              <div className="flex flex-col items-start gap-4">
                <Link href="#" className="inline-block rounded-lg overflow-hidden border border-slate-300">
                  <div className="bg-black text-white flex items-center gap-2 px-4 py-2">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="leading-tight">
                      <div className="text-[10px]">Download on the</div>
                      <div className="text-base font-semibold -mt-0.5">App Store</div>
                    </div>
                  </div>
                </Link>
                <Link href="#" className="inline-block rounded-lg overflow-hidden border border-slate-300">
                  <div className="bg-black text-white flex items-center gap-2 px-4 py-2">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.57 1.19l-1.97 1.13-2.5-2.5 2.5-2.5 1.98 1.49M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
                    </svg>
                    <div className="leading-tight">
                      <div className="text-[10px]">GET IT ON</div>
                      <div className="text-base font-semibold -mt-0.5">Google Play</div>
                    </div>
                  </div>
                </Link>
                <div className="mt-4 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-slate-900 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-900 text-center leading-tight">Certified<br />B<br />Corp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">&copy; 2026 Coursera Inc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <Link href="#" aria-label="Facebook" className="text-slate-700 hover:text-slate-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </Link>
              {/* LinkedIn */}
              <Link href="#" aria-label="LinkedIn" className="text-slate-700 hover:text-slate-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </Link>
              {/* Twitter/X */}
              <Link href="#" aria-label="Twitter" className="text-slate-700 hover:text-slate-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </Link>
              {/* YouTube */}
              <Link href="#" aria-label="YouTube" className="text-slate-700 hover:text-slate-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </Link>
              {/* Instagram */}
              <Link href="#" aria-label="Instagram" className="text-slate-700 hover:text-slate-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" /></svg>
              </Link>
              {/* TikTok */}
              <Link href="#" aria-label="TikTok" className="text-slate-700 hover:text-slate-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
