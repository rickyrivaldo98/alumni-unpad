import React, { useEffect, useState } from "react";
import Dropdown from "./layout/Dropdown";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
const About = () => {
  // fungsi navbar untuk dibuka di mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // akhir fungsi navbar
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <div className="flex justify-center items-center my-20">
        <h1 className="text-3xl font-bold">Tentang Kami</h1>{" "}
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full px-10 md:w-1/2 ">
          Keluarga adalah orang-orang yang kita sayangi. 
          <br />
          <br />
          Keluarga adalah tempat pulang yang terbaik. 
          <br />
          <br />
          Keluarga adalah motivatorku yang terbaik.
          <br />
          <br />
          Keluarga adalah tempat aku bisa mengekspresikan jati diriku.
          <br />
          <br />
          Keluarga..... menempati makna tersendiri bagi setiap individu. Namun
          kami di sini adalah keluarga yang unik. Walaupun berasal dari orang
          tua yang berbeda, tempat kelahiran berbeda, bahkan membawa logat
          bahasa daerah masing-masing, namun kami merasakan keluarga itu. 
          <br />
          <br />
          Kami adalah Ikatan Alumni Dharmavira, yang berasal dari mahasiswa Buddhis
          yang mengambil perkuliahan di Universitas Padjadjaran (Unpad) atau
          lebih spesifiknya kami dipertemukan di mata kuliah Agama Buddha di
          Unpad. Karena belum banyaknya universitas di Bandung yang membuka
          kelas mata kuliah Agama Buddha, maka beberapa universitas swasta di
          Bandung mengambil perkuliahan Agama Buddha di Unpad, antara lain :
          ITENAS, LIKMI, UNIKOM, TELKOM, dan UPI. 
          <br />
          <br />
          Rasa memiliki keyakinan yang sama itu tidak berakhir di Ujian Akhir Semester (UAS) mata kuliah
          agama Buddha saja, selanjutnya kami menamakan diri sebagai Keluarga
          Mahasiswa Buddhis Dharmavira (KMBD) yang telah ada sejak tahun 1986.
          Di keluarga ini lah kami memulai segala kegiatan menggali potensi diri
          baik dalam organisasi maupun Dharma. Di keluarga ini juga, menjadi
          tempat berkeluh kesah, bercanda ria, berbagi cerita apapun, bala
          bantuan menyelesaikan tugas kuliah, tempat menemukan pasangan hidup,
          bahkan menjelma menjadi ‘rumah’ ketika rindu akan orang-orang yang
          disayangi di kampung halaman. Karena di keluarga ini kami merasakan
          kepedulian seperti layaknya keluarga, as a family we care. 
          <br />
          <br />
          Ternyata rasa ‘keluarga’ itu tidak berakhir ketika toga dikenakan di kepala
          kami. Selanjutnya ini lah kami, Ikatan Alumni Dharmavira (IKA
          Dharmavira) UNPAD, yang dicetus pada tahun 2020. Walaupun telah
          menyandang status alumni, rasa persaudaraan layaknya keluarga tetap
          terjalin. Di sini selanjutnya kami berkarya kebajikan dan tetap pada
          arti kemanusiaan dan bermanfaat bagi bersama.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
