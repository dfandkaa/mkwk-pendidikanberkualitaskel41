let userData = { name: '', grade: '' };
let currentQuestionIndex = 0;
let scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

// Bank Pertanyaan Berbasis Skenario Menarik untuk Anak SMP
const questions = [
    {
        category: 'R',
        tag: 'Praktikal & Otomotif/Sains Fisik',
        title: 'Pas sepeda / laptop / hp kamu rusak, apa hal pertama yang refleks kamu lakukan?',
        options: [
            { text: 'Membongkar sendiri dan mencoba memperbaiki fisiknya pakai obeng/alat.', score: 3 },
            { text: 'Mencari tahu penyebab teknisnya lewat tutorial YouTube dulu baru eksekusi.', score: 2 },
            { text: 'Minta bantuan teman atau langsung membawanya ke tempat servis.', score: 1 }
        ]
    },
    {
        category: 'I',
        tag: 'Logika & Eksperimen',
        title: 'Kalau ada berita viral / hoaks di media sosial, kamu biasanya gimana?',
        options: [
            { text: 'Kepo banget! Langsung kumpulin data & fakta dari banyak sumber valid buat pembuktian.', score: 3 },
            { text: 'Cukup membaca sekilas dan membandingkannya dengan logika akal sehat.', score: 2 },
            { text: 'Hanya menyimak pembicaraan teman-teman tanpa terlalu memikirkannya.', score: 1 }
        ]
    },
    {
        category: 'A',
        tag: 'Seni & Kreativitas',
        title: 'Kamu dapat tugas kelompok bebas milih format hasil karya. Kamu bakal milih bikin apa?',
        options: [
            { text: 'Desain poster estetik, video klip pendek, komik, atau aransemen musik.', score: 3 },
            { text: 'Bikin slide presentasi yang rapi dengan sedikit sentuhan visual.', score: 2 },
            { text: 'Menulis makalah atau laporan teks biasa saja.', score: 1 }
        ]
    },
    {
        category: 'S',
        tag: 'Sosial & Bimbingan',
        title: 'Pas ada teman kelas yang kelihatan sedih atau kesulitan memahami pelajaran matematika/B.Inggris:',
        options: [
            { text: 'Langsung nyamperin, dengarkan curhatnya, dan dengan senang hati ngajarin sampai paham.', score: 3 },
            { text: 'Memberikan jawaban/catatan milikmu untuk dia pelajari sendiri.', score: 2 },
            { text: 'Menunggu dia meminta bantuan duluan baru kamu respon.', score: 1 }
        ]
    },
    {
        category: 'E',
        tag: 'Kepemimpinan & Bisnis',
        title: 'Di acara Classmeeting sekolah, kamu paling tertarik mengambil peran sebagai apa?',
        options: [
            { text: 'Ketua Panitia yang memimpin tim, ngatur strategi, dan jualan bazar buat dapet untung.', score: 3 },
            { text: 'Ikut membantu mengoordinasikan teman-teman di lapangan.', score: 2 },
            { text: 'Jadi penonton atau peserta lomba biasa saja.', score: 1 }
        ]
    },
    {
        category: 'C',
        tag: 'Keteraturan & Data',
        title: 'Gimana cara kamu mengelola catatan sekolah dan uang saku mingguanmu?',
        options: [
            { text: 'Super rapi! Catatan pakai tabel/binder warna-warni, uang saku dicatat detail di hp/buku.', score: 3 },
            { text: 'Cukup rapi, sesekali merapikan file kalau sudah terasa berantakan.', score: 2 },
            { text: 'Santai saja, yang penting tidak hilang.', score: 1 }
        ]
    },
    {
        category: 'R',
        tag: 'Aktivitas Lapangan',
        title: 'Saat praktikum IPA di laboratorium atau kegiatan outdoor (Pramuka/LDK):',
        options: [
            { text: 'Paling antusias megang alat praktikum, merakit tenda, atau uji coba fisik langsung.', score: 3 },
            { text: 'Mengamati jalannya praktikum sambil sesekali mencatat hasilnya.', score: 2 },
            { text: 'Mencatat laporan hasil dari yang dikerjakan teman kelompok.', score: 1 }
        ]
    },
    {
        category: 'I',
        tag: 'Pemrograman & Riset',
        title: 'Kamu disuruh memecahkan teka-teki logika atau mempelajari bahasa koding komputer:',
        options: [
            { text: 'Sangat tertantang! Senang memikirkan solusi rumit sampai ketemu rumusnya.', score: 3 },
            { text: 'Tertarik mencoba kalau ada panduan yang jelas.', score: 2 },
            { text: 'Kurang suka hal yang terlalu pusing dan penuh rumus rumit.', score: 1 }
        ]
    },
    {
        category: 'A',
        tag: 'Imajinasi',
        title: 'Bagaimana caramu menyampaikan ide saat diskusi di kelas?',
        options: [
            { text: 'Menggunakan cara yang unik, out-of-the-box, dan imajinatif yang beda dari yang lain.', score: 3 },
            { text: 'Menggabungkan ide teman-teman menjadi ide baru.', score: 2 },
            { text: 'Mengikuti alur ide yang disepakati mayoritas teman.', score: 1 }
        ]
    },
    {
        category: 'S',
        tag: 'Komunikasi',
        title: 'Saat ada murid baru di kelas yang belum kenal siapa-siapa:',
        options: [
            { text: 'Kamu yang pertama tersenyum, menyapa, dan mengajaknya bergabung di kantin.', score: 3 },
            { text: 'Menunggu moment yang pas untuk mengobrol saat kerja kelompok.', score: 2 },
            { text: 'Membiarkan dia beradaptasi sendiri dengan lingkungan baru.', score: 1 }
        ]
    },
    {
        category: 'E',
        tag: 'Negosiasi',
        title: 'Saat pembagian tugas kelompok terasa tidak adil, kamu akan:',
        options: [
            { text: 'Tampil bicara, mengarahkan pembagian ulang secara adil, dan memotivasi anggota.', score: 3 },
            { text: 'Memberikan saran perbaikan secara pelan-pelan.', score: 2 },
            { text: 'Menerima saja bagian tugas yang diberikan kepadamu.', score: 1 }
        ]
    },
    {
        category: 'C',
        tag: 'Manajemen Sistem',
        title: 'Mana kegiatan yang bikin kamu paling merasa tenang dan satisfied?',
        options: [
            { text: 'Merapikan file di laptop/HP, menyusun jadwal harian (planner), atau merapikan meja.', score: 3 },
            { text: 'Menyelesaikan daftar tugas sekolah tepat waktu.', score: 2 },
            { text: 'Main game atau santai tanpa memikirkan jadwal ketat.', score: 1 }
        ]
    }
];

// Archetype Data berdasarkan RIASEC Dominan
const archetypes = {
    'R': {
        icon: '🛠️',
        title: 'Si Arsitek Sistem & Praktisi Teknis',
        desc: 'Kamu unggul dalam logika praktis, pengerjaan fisik, teknologi hardware, dan pemecahan masalah nyata!',
        sma: '<strong>SMA:</strong> IPA (Fokus Fisika & Matematika)<br><strong>SMK:</strong> Teknik Komputer & Jaringan (TKJ), Rekayasa Perangkat Lunak (RPL), Otomotif, Mekatronika.',
        college: '<strong>Jurusan Kuliah:</strong> Ilmu Komputer (Hardware/IoT), Teknik Elektro, Teknik Mesin, Arsitektur, Robotika.<br><strong>Karir Masa Depan:</strong> Hardware Engineer, IoT Specialist, Network Engineer, Arsitek.'
    },
    'I': {
        icon: '🔬',
        title: 'Si Analis Logika & Peneliti Sains',
        desc: 'Kamu memiliki rasa ingin tahu tinggi, menyukai algoritma, teka-teki rumit, dan analisis data mendalam!',
        sma: '<strong>SMA:</strong> IPA (Sangat disarankan)<br><strong>SMK:</strong> Rekayasa Perangkat Lunak (RPL), Analis Kimia, Farmasi.',
        college: '<strong>Jurusan Kuliah:</strong> Ilmu Komputer / Informatika, Data Science, Cyber Security, Kedokteran, Bioteknologi, Matematika.<br><strong>Karir Masa Depan:</strong> Software Developer, Data Scientist, AI Specialist, Peneliti, Cyber Security Analyst.'
    },
    'A': {
        icon: '🎨',
        title: 'Si Kreatif Inovatif & UI/UX Visioner',
        desc: 'Daya imajinasimu luar biasa! Kamu pandai mengolah keindahan visual, konsep unik, dan ekspresi diri.',
        sma: '<strong>SMA:</strong> IPA / IPS / Bahasa<br><strong>SMK:</strong> Desain Komunikasi Visual (DKV), Multimedia, Animasi, Broadcasting.',
        college: '<strong>Jurusan Kuliah:</strong> UI/UX Design, Desain Komunikasi Visual (DKV), Animasi & Game Dev, Sastra & Film.<br><strong>Karir Masa Depan:</strong> UI/UX Designer, Game Developer, Creative Director, Animator, Content Creator.'
    },
    'S': {
        icon: '🤝',
        title: 'Si Penggerak Empati & Konsultan Masa Depan',
        desc: 'Kamu memiliki kecerdasan emosional tinggi, senang membantu orang lain, mengajar, dan berkolaborasi.',
        sma: '<strong>SMA:</strong> IPS / IPA<br><strong>SMK:</strong> Layanan Kesehatan, Pekerjaan Sosial, Pariwisata.',
        college: '<strong>Jurusan Kuliah:</strong> Psikologi, Ilmu Komunikasi, Hubungan Internasional, Pendidikan/Keguruan, Sistem Informasi.<br><strong>Karir Masa Depan:</strong> IT Consultant, HRD Manager, Psikolog, Dosen/Guru, EdTech Specialist.'
    },
    'E': {
        icon: '💼',
        title: 'Si Pemimpin Visioner & Tech Entrepreneur',
        desc: 'Kamu punya jiwa kepemimpinan, berani mengambil peluang, persuasif, dan sangat cocok berbisnis!',
        sma: '<strong>SMA:</strong> IPS / IPA<br><strong>SMK:</strong> Bisnis Digital, Pemasaran, Manajemen Perkantoran.',
        college: '<strong>Jurusan Kuliah:</strong> Manajemen, Bisnis Digital, Kewirausahaan, Hukum, Teknik Industri.<br><strong>Karir Masa Depan:</strong> Startup Founder (CEO), Product Manager, Digital Marketer, Business Analyst.'
    },
    'C': {
        icon: '📊',
        title: 'Si Master Data & Manajer Terstruktur',
        desc: 'Teliti, teratur, dan menyukai keakuratan data. Kamu adalah tulang punggung efisiensi sistem!',
        sma: '<strong>SMA:</strong> IPS / IPA<br><strong>SMK:</strong> Akuntansi & Keuangan Lembaga, Otomatisasi Perkantoran.',
        college: '<strong>Jurusan Kuliah:</strong> Sistem Informasi, Data Analytics, Akuntansi, Perbankan Digital, Administrasi Publik.<br><strong>Karir Masa Depan:</strong> Database Administrator, Business Intelligence, QA Engineer, Financial Analyst.'
    }
};

const studyHacks = [
    "<strong>Teknik Pomodoro:</strong> Belajar fokus 25 menit, lalu istirahat total 5 menit. Ulangi 4 kali! Ini ampuh cegah otak lelah.",
    "<strong>Teknik Feynman:</strong> Coba jelaskan materi sulit yang baru kamu pelajari ke adik atau teman pakai bahasa sehari-hari yang super simpel.",
    "<strong>Active Recall:</strong> Jangan cuma dibaca berulang-ulang! Tutup bukumu, lalu tuliskan atau ucapkan kembali apa yang kamu ingat dari memori.",
    "<strong>Spaced Repetition:</strong> Review materi baru pada Hari ke-1, Hari ke-3, Hari ke-7, dan Hari ke-30 agar masuk ke memori jangka panjang.",
    "<strong>Aturan 5 Menit:</strong> Kalau malas mulai belajar, katakan pada diri sendiri: 'Aku cuma bakal belajar 5 menit aja kok'. Biasanya setelah mulai, kamu bakal kebablasan lanjut!"
];

function startQuiz(e) {
    e.preventDefault();
    userData.name = document.getElementById('user-name').value;
    userData.grade = document.getElementById('user-grade').value;

    document.getElementById('step-onboarding').classList.add('hidden');
    document.getElementById('step-quiz').classList.remove('hidden');

    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuestionIndex];
    const total = questions.length;
    const progressPct = Math.round(((currentQuestionIndex) / total) * 100);

    document.getElementById('quiz-progress-text').innerText = `Skenario ${currentQuestionIndex + 1} dari ${total}`;
    document.getElementById('quiz-percentage').innerText = `${progressPct}%`;
    document.getElementById('quiz-progress-bar').style.width = `${progressPct}%`;

    document.getElementById('q-category-tag').innerText = `Skenario #${currentQuestionIndex + 1} — ${q.tag}`;
    document.getElementById('q-title').innerText = q.title;

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-4 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 transition duration-150 font-medium text-slate-700 text-sm flex items-center justify-between group";
        btn.innerHTML = `
            <span>${opt.text}</span>
            <span class="w-6 h-6 rounded-full border border-slate-300 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center text-xs transition">➔</span>
        `;
        btn.onclick = () => selectOption(q.category, opt.score);
        container.appendChild(btn);
    });
}

function selectOption(category, score) {
    scores[category] += score;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    document.getElementById('step-quiz').classList.add('hidden');
    document.getElementById('step-result').classList.remove('hidden');

    // Trigger Confetti Celebration
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Find Top Category
    let maxCat = 'R';
    let maxVal = -1;
    for (let cat in scores) {
        if (scores[cat] > maxVal) {
            maxVal = scores[cat];
            maxCat = cat;
        }
    }

    const info = archetypes[maxCat];
    document.getElementById('res-user-name').innerText = `${userData.name} (${userData.grade})`;
    document.getElementById('res-archetype-icon').innerText = info.icon;
    document.getElementById('res-archetype-title').innerText = info.title;
    document.getElementById('res-archetype-desc').innerText = info.desc;
    document.getElementById('res-school-recommendation').innerHTML = info.sma;
    document.getElementById('res-college-recommendation').innerHTML = info.college;

    // Render Radar Chart
    const ctx = document.getElementById('riasecChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Praktikal (R)', 'Analitis (I)', 'Kreatif (A)', 'Sosial (S)', 'Kepemimpinan (E)', 'Terstruktur (C)'],
            datasets: [{
                label: 'Skor Minat Bakat',
                data: [scores.R, scores.I, scores.A, scores.S, scores.E, scores.C],
                backgroundColor: 'rgba(99, 102, 241, 0.25)',
                borderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 2.5,
                pointBackgroundColor: 'rgba(99, 102, 241, 1)',
                pointRadius: 4
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { color: '#cbd5e1' },
                    grid: { color: '#e2e8f0' },
                    suggestedMin: 0,
                    suggestedMax: 6,
                    ticks: { display: false }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function generateStudyHack() {
    const randomHack = studyHacks[Math.floor(Math.random() * studyHacks.length)];
    document.getElementById('study-hack-text').innerHTML = randomHack;
}