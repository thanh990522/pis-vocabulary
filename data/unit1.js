export const unit1 = {
  id: "unit-1",
  number: 1,
  title: "Great Places to Be",
  subtitle: "Explore places, people, landscapes, and useful chart language.",
  sections: [
    {
      id: "reading-1",
      label: "Reading 1",
      icon: "🏙️",
      color: "blue",
      words: [
        { word: "unusual", ipa: "/ʌnˈjuː.ʒu.əl/", pos: "adjective", meaning: "khác thường", example: "The café has an unusual shape.", translation: "Quán cà phê có hình dáng khác thường.", icon: "🛸" },
        { word: "lively", ipa: "/ˈlaɪv.li/", pos: "adjective", meaning: "sôi động, náo nhiệt", example: "The town centre is lively at night.", translation: "Trung tâm thị trấn rất sôi động vào ban đêm.", icon: "🎉" },
        { word: "festival", ipa: "/ˈfes.tə.vəl/", pos: "noun", meaning: "lễ hội", example: "Our city holds a food festival every spring.", translation: "Thành phố của chúng tôi tổ chức lễ hội ẩm thực vào mỗi mùa xuân.", icon: "🎪" },
        { word: "inhabitant", ipa: "/ɪnˈhæb.ə.tənt/", pos: "noun", meaning: "cư dân", example: "The island has fewer than 500 inhabitants.", translation: "Hòn đảo có chưa đến 500 cư dân.", icon: "🏡" },
        { word: "public transport", ipa: "/ˌpʌb.lɪk ˈtræn.spɔːrt/", pos: "noun phrase", meaning: "giao thông công cộng", example: "Reliable public transport makes commuting easier.", translation: "Giao thông công cộng đáng tin cậy giúp việc đi lại dễ dàng hơn.", icon: "🚌", audioTokens: ["public", "transport"] },
        { word: "crime rate", ipa: "/ˈkraɪm ˌreɪt/", pos: "noun phrase", meaning: "tỷ lệ tội phạm", example: "The crime rate fell after more streetlights were installed.", translation: "Tỷ lệ tội phạm giảm sau khi có thêm đèn đường.", icon: "🛡️", audioTokens: ["crime", "rate"] },
        { word: "lifestyle", ipa: "/ˈlaɪf.staɪl/", pos: "noun", meaning: "lối sống", example: "A balanced lifestyle includes rest and exercise.", translation: "Lối sống cân bằng bao gồm nghỉ ngơi và tập thể dục.", icon: "🚴" },
        { word: "social", ipa: "/ˈsoʊ.ʃəl/", pos: "adjective", meaning: "thuộc xã hội; mang tính giao tiếp", example: "The club organises social activities for teenagers.", translation: "Câu lạc bộ tổ chức các hoạt động giao lưu cho thanh thiếu niên.", icon: "🤝" },
        { word: "psychologist", ipa: "/saɪˈkɑː.lə.dʒɪst/", pos: "noun", meaning: "nhà tâm lý học", example: "The psychologist studies how people behave in crowds.", translation: "Nhà tâm lý học nghiên cứu cách con người hành xử trong đám đông.", icon: "🧠" },
        { word: "situation", ipa: "/ˌsɪtʃ.uˈeɪ.ʃən/", pos: "noun", meaning: "tình huống, hoàn cảnh", example: "The situation improved when the rain stopped.", translation: "Tình hình được cải thiện khi mưa ngừng.", icon: "🧩" },
        { word: "population", ipa: "/ˌpɑː.pjəˈleɪ.ʃən/", pos: "noun", meaning: "dân số", example: "The city's population has doubled in twenty years.", translation: "Dân số thành phố đã tăng gấp đôi trong hai mươi năm.", icon: "👥" },
        { word: "environment", ipa: "/ɪnˈvaɪ.rən.mənt/", pos: "noun", meaning: "môi trường", example: "Cycling is better for the environment than driving.", translation: "Đi xe đạp tốt cho môi trường hơn lái ô tô.", icon: "🌱" },
        { word: "culture", ipa: "/ˈkʌl.tʃɚ/", pos: "noun", meaning: "văn hóa", example: "Food is an important part of local culture.", translation: "Ẩm thực là một phần quan trọng của văn hóa địa phương.", icon: "🎭" },
        { word: "nationality", ipa: "/ˌnæʃ.əˈnæl.ə.t̬i/", pos: "noun", meaning: "quốc tịch", example: "The form asks for your name and nationality.", translation: "Biểu mẫu yêu cầu tên và quốc tịch của bạn.", icon: "🛂" },
        { word: "local", ipa: "/ˈloʊ.kəl/", pos: "noun", meaning: "người địa phương", example: "A local showed us the quickest route.", translation: "Một người địa phương đã chỉ cho chúng tôi tuyến đường nhanh nhất.", icon: "🧑‍🌾", sourceForm: "locals" },
        { word: "stranger", ipa: "/ˈstreɪn.dʒɚ/", pos: "noun", meaning: "người lạ", example: "Do not share personal details with a stranger.", translation: "Đừng chia sẻ thông tin cá nhân với người lạ.", icon: "👤", sourceForm: "strangers" },
        { word: "conduct", ipa: "/kənˈdʌkt/", pos: "verb", meaning: "tiến hành, thực hiện", example: "Students will conduct a survey about city life.", translation: "Học sinh sẽ tiến hành một khảo sát về cuộc sống thành phố.", icon: "📋" },
        { word: "pretend", ipa: "/prɪˈtend/", pos: "verb", meaning: "giả vờ", example: "He pretended not to notice the noise.", translation: "Cậu ấy giả vờ không chú ý đến tiếng ồn.", icon: "🎭" },
        { word: "percentage", ipa: "/pɚˈsen.t̬ɪdʒ/", pos: "noun", meaning: "tỷ lệ phần trăm; phần trăm", example: "A high percentage of residents use buses.", translation: "Một tỷ lệ cao cư dân sử dụng xe buýt.", icon: "📊" },
        { word: "ignore", ipa: "/ɪɡˈnɔːr/", pos: "verb", meaning: "phớt lờ, bỏ qua", example: "You should not ignore a safety warning.", translation: "Bạn không nên bỏ qua cảnh báo an toàn.", icon: "🙈" },
        { word: "reputation", ipa: "/ˌrep.jəˈteɪ.ʃən/", pos: "noun", meaning: "danh tiếng", example: "The town has a reputation for friendly people.", translation: "Thị trấn nổi tiếng là có những người dân thân thiện.", icon: "⭐" },
        { word: "accommodation", ipa: "/əˌkɑː.məˈdeɪ.ʃən/", pos: "noun", meaning: "chỗ ở", example: "Student accommodation is available near the campus.", translation: "Có chỗ ở dành cho sinh viên gần khuôn viên trường.", icon: "🏨" },
        { word: "gap", ipa: "/ɡæp/", pos: "noun", meaning: "khoảng cách; khoảng trống", example: "There is a wide gap between the two buildings.", translation: "Có một khoảng cách rộng giữa hai tòa nhà.", icon: "↔️" }
      ]
    },
    {
      id: "reading-2",
      label: "Reading 2",
      icon: "🌍",
      color: "teal",
      words: [
        { word: "diverse", ipa: "/dɪˈvɝːs, daɪ-/", pos: "adjective", meaning: "đa dạng", example: "The region has a diverse range of wildlife.", translation: "Khu vực này có hệ động vật hoang dã đa dạng.", icon: "🌈" },
        { word: "landscape", ipa: "/ˈlænd.skeɪp/", pos: "noun", meaning: "cảnh quan", example: "Volcanoes dominate the island's landscape.", translation: "Núi lửa chiếm ưu thế trong cảnh quan của hòn đảo.", icon: "🏞️" },
        { word: "preserve", ipa: "/prɪˈzɝːv/", pos: "verb", meaning: "bảo tồn, gìn giữ", example: "The park helps preserve rare plants.", translation: "Công viên giúp bảo tồn các loài thực vật quý hiếm.", icon: "🌿" },
        { word: "tropical", ipa: "/ˈtrɑː.pɪ.kəl/", pos: "adjective", meaning: "nhiệt đới", example: "Mangoes grow well in a tropical climate.", translation: "Xoài phát triển tốt trong khí hậu nhiệt đới.", icon: "🌴" },
        { word: "rainforest", ipa: "/ˈreɪnˌfɔːr.ɪst/", pos: "noun", meaning: "rừng mưa nhiệt đới", example: "Many unique species live in the rainforest.", translation: "Nhiều loài độc đáo sống trong rừng mưa nhiệt đới.", icon: "🦜" },
        { word: "index", ipa: "/ˈɪn.deks/", pos: "noun", meaning: "chỉ số", example: "The index compares the quality of life in different cities.", translation: "Chỉ số so sánh chất lượng cuộc sống ở các thành phố khác nhau.", icon: "📈" },
        { word: "mid-income", ipa: "/ˌmɪdˈɪn.kʌm/", pos: "adjective", meaning: "có thu nhập trung bình", example: "The project supports mid-income families.", translation: "Dự án hỗ trợ các gia đình có thu nhập trung bình.", icon: "💵", audioTokens: ["mid", "income"] },
        { word: "basic needs", ipa: "/ˌbeɪ.sɪk ˈniːdz/", pos: "noun phrase", meaning: "các nhu cầu cơ bản", example: "Food, clean water, and shelter are basic needs.", translation: "Thực phẩm, nước sạch và nơi ở là những nhu cầu cơ bản.", icon: "🍚", audioTokens: ["basic", "needs"] },
        { word: "citizen", ipa: "/ˈsɪt̬.ə.zən/", pos: "noun", meaning: "công dân", example: "Every citizen can vote in the local election.", translation: "Mỗi công dân đều có thể bỏ phiếu trong cuộc bầu cử địa phương.", icon: "🪪" },
        { word: "industrial", ipa: "/ɪnˈdʌs.tri.əl/", pos: "adjective", meaning: "thuộc công nghiệp", example: "The old industrial area is now a public park.", translation: "Khu công nghiệp cũ nay là một công viên công cộng.", icon: "🏭" },
        { word: "suburban", ipa: "/səˈbɝː.bən/", pos: "adjective", meaning: "thuộc ngoại ô", example: "They moved to a quiet suburban neighborhood.", translation: "Họ chuyển đến một khu dân cư ngoại ô yên tĩnh.", icon: "🏘️" },
        { word: "desert", ipa: "/ˈdez.ɚt/", pos: "noun", meaning: "sa mạc", example: "Temperatures fall quickly in the desert at night.", translation: "Nhiệt độ giảm nhanh trong sa mạc vào ban đêm.", icon: "🏜️" },
        { word: "outskirts", ipa: "/ˈaʊt.skɝːts/", pos: "plural noun", meaning: "vùng ngoại ô; rìa thành phố", example: "The airport lies on the outskirts of the city.", translation: "Sân bay nằm ở vùng ngoại ô thành phố.", icon: "🛣️", sourceForm: "outskirt" },
        { word: "suburb", ipa: "/ˈsʌb.ɝːb/", pos: "noun", meaning: "khu ngoại ô", example: "She lives in a suburb north of the city.", translation: "Cô ấy sống ở một khu ngoại ô phía bắc thành phố.", icon: "🏠" },
        { word: "area", ipa: "/ˈer.i.ə/", pos: "noun", meaning: "khu vực", example: "This area is popular with young families.", translation: "Khu vực này được các gia đình trẻ ưa chuộng.", icon: "📍" },
        { word: "describe", ipa: "/dɪˈskraɪb/", pos: "verb", meaning: "mô tả", example: "Use three adjectives to describe your hometown.", translation: "Hãy dùng ba tính từ để mô tả quê hương của bạn.", icon: "✍️" },
        { word: "region", ipa: "/ˈriː.dʒən/", pos: "noun", meaning: "vùng, khu vực", example: "This region is famous for coffee farms.", translation: "Vùng này nổi tiếng với các trang trại cà phê.", icon: "🗺️" },
        { word: "medicine", ipa: "/ˈmed.ə.sən/", pos: "noun", meaning: "y khoa; thuốc", example: "She hopes to study medicine at university.", translation: "Cô ấy hy vọng học ngành y tại đại học.", icon: "🩺" },
        { word: "economic", ipa: "/ˌek.əˈnɑː.mɪk/", pos: "adjective", meaning: "thuộc kinh tế", example: "Tourism brings economic benefits to the island.", translation: "Du lịch mang lại lợi ích kinh tế cho hòn đảo.", icon: "📉" },
        { word: "government", ipa: "/ˈɡʌv.ɚn.mənt/", pos: "noun", meaning: "chính phủ", example: "The government is investing in public transport.", translation: "Chính phủ đang đầu tư vào giao thông công cộng.", icon: "🏛️" },
        { word: "influence / be influenced by", ipa: "/ˈɪn.flu.əns/", pos: "verb / phrase", meaning: "ảnh hưởng; bị ảnh hưởng bởi", example: "Climate can influence the way people build homes.", translation: "Khí hậu có thể ảnh hưởng đến cách con người xây nhà.", icon: "🌊", audioWord: "influence", dictionaryWord: "influence", sourceForm: "influenced" },
        { word: "geology", ipa: "/dʒiˈɑː.lə.dʒi/", pos: "noun", meaning: "địa chất học", example: "The island's geology attracts many scientists.", translation: "Địa chất của hòn đảo thu hút nhiều nhà khoa học.", icon: "🪨" },
        { word: "oil industry", ipa: "/ˈɔɪl ˌɪn.də.stri/", pos: "noun phrase", meaning: "ngành công nghiệp dầu mỏ", example: "The oil industry provides thousands of jobs.", translation: "Ngành công nghiệp dầu mỏ tạo ra hàng nghìn việc làm.", icon: "🛢️", audioTokens: ["oil", "industry"] }
      ]
    },
    {
      id: "writing",
      label: "Writing",
      icon: "✏️",
      color: "yellow",
      words: [
        { word: "business", ipa: "/ˈbɪz.nɪs/", pos: "noun", meaning: "việc kinh doanh; doanh nghiệp", example: "Tourism is important for local businesses.", translation: "Du lịch rất quan trọng đối với các doanh nghiệp địa phương.", icon: "💼" },
        { word: "figure", ipa: "/ˈfɪɡ.jɚ/", pos: "noun", meaning: "số liệu, con số", example: "The figure rose to 65 percent in 2025.", translation: "Con số tăng lên 65 phần trăm vào năm 2025.", icon: "🔢" },
        { word: "chart", ipa: "/tʃɑːrt/", pos: "noun", meaning: "biểu đồ", example: "The chart compares three popular activities.", translation: "Biểu đồ so sánh ba hoạt động phổ biến.", icon: "📊" },
        { word: "pleasure", ipa: "/ˈpleʒ.ɚ/", pos: "noun", meaning: "niềm vui; thú vui", example: "For many visitors, boating is a simple pleasure.", translation: "Đối với nhiều du khách, đi thuyền là một thú vui giản dị.", icon: "😊" },
        { word: "university qualification", ipa: "/ˌjuː.nəˈvɝː.sə.t̬i ˌkwɑː.lə.fəˈkeɪ.ʃən/", pos: "noun phrase", meaning: "bằng cấp đại học", example: "A university qualification can improve job prospects.", translation: "Bằng cấp đại học có thể cải thiện cơ hội việc làm.", icon: "🎓", audioTokens: ["university", "qualification"], dictionaryWord: "qualification" },
        { word: "volcano", ipa: "/vɑːlˈkeɪ.noʊ/", pos: "noun", meaning: "núi lửa", example: "The volcano has been inactive for a century.", translation: "Núi lửa đã không hoạt động trong một thế kỷ.", icon: "🌋" },
        { word: "boating", ipa: "/ˈboʊ.t̬ɪŋ/", pos: "noun", meaning: "hoạt động đi thuyền", example: "Boating is safest when everyone wears a life jacket.", translation: "Đi thuyền an toàn nhất khi mọi người đều mặc áo phao.", icon: "🚣" },
        { word: "holidaymaker", ipa: "/ˈhɑː.lə.deɪˌmeɪ.kɚ/", pos: "noun", meaning: "người đi nghỉ mát", example: "The beach is popular with holidaymakers in July.", translation: "Bãi biển được những người đi nghỉ mát ưa chuộng vào tháng Bảy.", icon: "🏖️" },
        { word: "common", ipa: "/ˈkɑː.mən/", pos: "adjective", meaning: "phổ biến, thường gặp", example: "Heavy rain is common during the wet season.", translation: "Mưa lớn thường xảy ra trong mùa mưa.", icon: "🔁" },
        { word: "private", ipa: "/ˈpraɪ.vət/", pos: "adjective", meaning: "riêng tư; tư nhân", example: "The hotel has a small private beach.", translation: "Khách sạn có một bãi biển riêng nhỏ.", icon: "🔐" }
      ]
    }
  ]
};

export default unit1;
