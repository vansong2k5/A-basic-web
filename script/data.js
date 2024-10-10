const bookList = [
    {
      img: "images/book1.jpg",
      title: "A Study Drowning",
      author: "Ava Reid",
      genre: "Tiểu thuyết",
      price: "99.000"
    },
    {
      img: "images/book2.jpg",
      title: "Onyx Storm",
      author: "Rebecca Yarros",
      genre: "Kinh dị",
      price: "190.000"
    },
    {
      img: "images/book3.jpg",
      title: "The Wren in the Holly Library",
      author: "K.A.Linde",
      genre: "Tiểu thuyết",
      price: "150.000"
    },
    {
      img: "images/book4.jpg",
      title: "Fourth Wing",
      author: "Rebecca Yarros",
      genre: "Kinh dị",
      price: "190.000"
    },
    {
      img: "images/book5.jpg",
      title: "Hooked",
      author: "Imyly Mcintire",
      genre: "Tiểu thuyết",
      price: "170.000"
    },
    {
      img: "images/book6.jpg",
      title: "The Games Gods Play",
      author: "Abigail Owen",
      genre: "Tiểu thuyết",
      price: "120.000"
    },
    {
      img: "images/book7.jpg",
      title: "Obsidian",
      author: "Jennifer L.Armentrout",
      genre: "Tiểu thuyết",
      price: "170.000"
    },
    {
      img: "images/book8.jpg",
      title: "Five Broken Blades",
      author: "Mai Corland",
      genre: "Kinh dị",
      price: "130.000"
    },
    {
      img: "images/book9.jpg",
      title: "Heaven Breaker",
      author: "Sala Wolf",
      genre: "Tiểu thuyết",
      price: "140.000"
    },
    {
      img: "images/book10.jpg",
      title: "Throne of Glass",
      author: "Sarah J.Maas",
      genre: "Kinh dị",
      price: "160.000"
    },
    {
      img: "images/book11.jpg",
      title: "Watch Me",
      author: "Tahereh Mafi",
      genre: "Tâm lí",
      price: "130.000"
    },
    {
      img: "images/book12.jpg",
      title: "The Spellshop",
      author: "Sarah Beth Durst",
      genre: "Tiểu thuyết",
      price: "150.000"
    },
    {
      img: "images/book13.jpg",
      title: "Somewhere Bayond the Sea",
      author: "TJ Klune",
      genre: "Tiểu thuyết",
      price: "170.000"
    },
    {
      img: "images/book14.jpg",
      title: "Hoàng tử bé",
      author: "Antoine De Saint-Exupéry",
      genre: "Tâm lí",
      price: "90.000"
    },
    {
      img: "images/book15.jpg",
      title: "Totto-chan bên cửa sổ",
      author: "Kuroyanagi Tetuko",
      genre: "Tiểu thuyết",
      price: "99.000"
    },
    {
      img: "images/book16.jpg",
      title: "Sức mạnh của buông bỏ",
      author: "John Purkiss",
      genre: "Tâm lí",
      price: "89.000"
    },
    {
      img: "images/book17.jpg",
      title: "Nó đây rồi",
      author: "Sơn Đào",
      genre: "Tâm lí",
      price: "119.000"
    },
    {
      img: "images/book18.jpg",
      title: "Làm sao để",
      author: "Randall Munroe",
      genre: "Tâm lí",
      price: "99.000"
    },
    {
      img: "images/book19.jpg",
      title: "Financial Freedom",
      author: "Grant Sabatier",
      genre: "Kinh tế",
      price: "120.000"
    },
    {
      img: "images/book20.jpg",
      title: "Hard core psychology",
      author: "Diêu Nghiêu",
      genre: "Tâm lí",
      price: "99.000"
    },
    {
      img: "images/book21.jpg",
      title: "Vùng đất quỹ tha ma bắt",
      author: "Kevin Chen",
      genre: "Kinh dị",
      price: "90.000"
    },
    {
      img: "images/book22.jpg",
      title: "Dám can đảm",
      author: "William H.McRaven",
      genre: "Tâm lí",
      price: "120.000"
    },
    {
      img: "images/book23.jpg",
      title: "Attack on Titan",
      author: "Hajime Isayama",
      genre: "Truyện tranh",
      price: "99.000"
    },
    {
      img: "images/book24.jpg",
      title: "Gachiakuta",
      author: "Kei Urana",
      genre: "Truyện tranh",
      price: "79.000"
    },
    {
      img: "images/book261.jpg",
      title: "Conan",
      author: "Gosho Aoyama",
      genre: "Truyện tranh",
      price: "49.000"
    },
    {
      img: "images/book33.jpg",
      title: "Kinh tế học hài hước",
      author: "D.Levitt & J.Dubner",
      genre: "Kinh tế",
      price: "99.000"
    },
    {
      img: "images/book34.jpg",
      title: "Cây cam ngọt của tôi",
      author: "Jose Mauro",
      genre: "Kinh tế",
      price: "119.000"
    },
    {
      img: "images/book35.jpg",
      title: "Người giàu có nhất thành Babylon",
      author: "Geogre Samuel Clason",
      genre: "Kinh tế",
      price: "120.000"
    },
    {
      img: "images/book26.jpg",
      title: "Hai vạn năm dưới biển",
      author: "Jules Verne",
      genre: "Truyện tranh",
      price: "49.000"
    },
    {
      img: "images/book27.jpg",
      title: "Wind and Truth",
      author: "Brandon Sanderson",
      genre: "Truyện tranh",
      price: "49.000"
    },
    {
      img: "images/book28.jpg",
      title: "Jujustu Kaisen 23",
      author: "Gege Akutami",
      genre: "Truyện tranh",
      price: "49.000"
    },
    {
      img: "images/book29.jpg",
      title: "Quản lí chuỗi cung ứng",
      author: "David Blanchard",
      genre: "Kinh tế",
      price: "49.000"
    },
    {
      img: "images/book30.jpg",
      title: "Content đúng là King",
      author: "Dan Norris",
      genre: "Kinh tế",
      price: "49.000"
    },
    {
      img: "images/book31.jpg",
      title: "Tư duy như Stephen Hawking",
      author: "Daniel Smith",
      genre: "Tâm lí",
      price: "49.000"
    },
    {
      img: "images/book32.jpg",
      title: "Điềm tĩnh và Nóng giận",
      author: "Tạ Quốc Kế",
      genre: "Tâm lí",
      price: "49.000"
    }
  ];