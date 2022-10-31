// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Biodata from './components/Biodata';

function App() {
  const [name, setName] = useState("Vaniaa");
  const [kelompok, setKelompok] = useState("FE-11");
  return (
    <>
      <Biodata imgurl="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ef50b1c-d552-4b79-972b-676353a4619b/degvmv4-97256c7c-653c-4bd9-9e46-abced30d4bc6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlZjUwYjFjLWQ1NTItNGI3OS05NzJiLTY3NjM1M2E0NjE5YlwvZGVndm12NC05NzI1NmM3Yy02NTNjLTRiZDktOWU0Ni1hYmNlZDMwZDRiYzYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dorX8nWbf6yqHKO9UM9IVj3eMy1arJZfsmj_Fpfq1gU" name={name} kelompok={kelompok} />
      <Biodata imgurl="https://images.solopos.com/2022/05/rsz_pro_kontra_pororo.jpg" name={"Firdaus"} kelompok={"FE-11"} />
      <Biodata imgurl="https://lzd-img-global.slatic.net/g/p/99865b80601c67831668cb8b8e7d5334.png_720x720q80.jpg_.webp" name={"Ilham"} kelompok={"FE-11"} />
    </>
  );
}

export default App;
