import { useSpeechSynthesis } from "react-speech-kit";
import React, { useState } from 'react'
import "../../App.css"


function Voice() {
    const { speak, voices } = useSpeechSynthesis();
    // const textfill = ['Universitas Terbuka (UT) adalah Perguruan Tinggi Negeri (PTN) ke-45 di Indonesia yang menerapkan sistem belajar terbuka dan jarak jauh. Sistem belajar ini terbukti efektif untuk meningkatkan daya jangkau dan pemerataan kesempatan pendidikan tinggi yang berkualitas bagi semua warga negara Indonesia, termasuk mereka yang tinggal di daerah-daerah terpencil, baik di seluruh nusantara maupun di berbagai belahan dunia.']
    // const welcome = ('Halo' + {textfill} + 'mantab' )

    // const [value, setValue] = useState("");

    // <textarea
    // rows="10"
    // value={value}
    // onChange={(e) => setValue(e.target.value)}  //Sample of dynamic Value input
    // ></textarea>

  return (
    <div className="relative bg-transparent">
    {/* <div onLoadStart={() => speak({ text: 'Halo Pak Antares, selamat datang', voice: voices[6]})}></div> */}
    <button className='speech' onClick={() => speak({ text: 'Halo Pak Antares, selamat datang.', voice: voices[6]})}>
      Voice
    </button>
    </div>
  )
}

export default Voice

