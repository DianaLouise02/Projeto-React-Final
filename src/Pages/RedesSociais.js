import React from 'react'
import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const RedesSociais = () => {
 // Função para abrir o link no Instagram
 const abrirInstagram = (url) => {
  Linking.openURL(url).catch((err) => console.error("Erro ao abrir o link: ", err));
};

// Dados dos intérpretes
const redesSociais = [
  {
    id: '1',
    interprete: 'Gabriel Macht',
    user: 'iamgabrielmacht',
    instagramUrl: 'https://www.instagram.com/iamgabrielmacht/',
    imagemUrl: 'https://thumbs.dreamstime.com/b/gabriel-macht-hollywood-foreign-press-association-annual-luncheon-beverly-hills-hotel-beverly-hills-ca-30570651.jpg',
  },
  {
    id: '2',
    interprete: 'Patrick J.Adams',
    user: 'patrickjadams',
    instagramUrl: 'https://www.instagram.com/patrickjadams/',
    imagemUrl: 'https://i.pinimg.com/236x/b5/be/66/b5be6659e3b99e875e500158da28d9dd.jpg',
  },
  {
    id: '3',
    interprete: 'Gina Torres',
    user: 'iamginatorres',
    instagramUrl: 'https://www.instagram.com/iamginatorres/',
    imagemUrl: 'https://static1.purepeople.com/articles/9/24/35/59/@/3411274-gina-torres-a-la-premiere-de-la-saison-7-580x0-1.jpg',
  },
  {
    id: '4',
    interprete: 'Rick Hoffman',
    user: 'rickehoffman',
    instagramUrl: 'https://www.instagram.com/rickehoffman/',
    imagemUrl: 'https://static.wikia.nocookie.net/suits/images/3/35/Suits_Cast_Rick_Hoffman_Wiki_Profile_Pic.png/revision/latest?cb=20120729055540',
  },
  {
    id: '5',
    interprete: 'Amanda Schull',
    user: 'amandaschull',
    instagramUrl: 'https://www.instagram.com/amandaschull/',
    imagemUrl: 'https://media.themoviedb.org/t/p/w500/uXcKWYCGoDJilx3fCYBkUBSuQ2k.jpg',
  },
  {
    id: '6',
    interprete: 'Sarah Rafferty',
    user: 'iamsarahgrafferty',
    instagramUrl: 'https://www.instagram.com/iamsarahgrafferty/',
    imagemUrl: 'https://www.shutterstock.com/editorial/image-editorial/M8T8Q904M8jbU1xfMDc1ODI=/sarah-rafferty-wearing-lanvin-dress-christian-louboutin-440nw-14291115iq.jpg',
  },
  {
    id: '7',
    interprete: 'Katherine Heigl',
    user: 'katherineheigl',
    instagramUrl: 'https://www.instagram.com/katherineheigl/',
    imagemUrl: 'https://cdn.britannica.com/21/124321-050-D0B3CEE4/Katherine-Heigl.jpg',
  },
  {
    id: '8',
    interprete: 'Dulé Hill',
    user: 'dulehill',
    instagramUrl: 'https://www.instagram.com/dulehill/',
    imagemUrl: 'https://www.geffenplayhouse.org/site/assets/files/4618/dule_hill.jpg',
  },
  {
    id: '9',
    interprete: 'D.B Woodside',
    user: 'dbwofficial',
    instagramUrl: 'https://www.instagram.com/dbwofficial/',
    imagemUrl: 'https://ntvb.tmsimg.com/assets/assets/68818_v9_bc.jpg?w=360&h=480',
  },
  {
    id: '10',
    interprete: 'Aloma Wright',
    user: 'alomawright',
    instagramUrl: 'https://www.instagram.com/alomawright/',
    imagemUrl: 'https://pbs.twimg.com/profile_images/1456006555191549952/cYb-LVgf_400x400.jpg',
  },
  {
    id: '11',
    interprete: 'Vanessa Ray',
    user: 'vrayskull',
    instagramUrl: 'https://www.instagram.com/vrayskull/',
    imagemUrl: 'https://br.web.img2.acsta.net/c_310_420/pictures/19/11/27/20/58/4593963.jpg',
  },
  {
    id: '12',
    interprete: 'Eric Roberts',
    user: 'ericrobertsactor',
    instagramUrl: 'https://www.instagram.com/ericrobertsactor/',
    imagemUrl: 'https://ntvb.tmsimg.com/assets/assets/19860_v9_bb.jpg?w=360&h=480',
  },
  {
    id: '13',
    interprete: 'Colenth Hill',
    user: 'officialconlethill',
    instagramUrl: 'https://www.instagram.com/officialconlethill/',
    imagemUrl: 'https://cinemaweb.com.br/wp-content/uploads/2024/06/pessoa-conleth-hill.jpg',
  },
  {
    id: '14',
    interprete: 'Neal McDonough',
    user: 'neal_mcdonough',
    instagramUrl: 'https://www.instagram.com/neal_mcdonough/',
    imagemUrl: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/73454_v9_bc.jpg',
  },
  {
    id: '15',
    interprete: 'Abigail Spencer',
    user: 'abigailspencer',
    instagramUrl: 'https://www.instagram.com/abigailspencer/',
    imagemUrl: 'https://m.media-amazon.com/images/M/MV5BNzE5MDdhMjctMjlhMy00OTMwLTg1NzktYzM3YmQwMjcwNzE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: '16',
    interprete: 'Wendell Pierce',
    user: 'wendellpcg',
    instagramUrl: 'https://www.instagram.com/wendellpcg/',
    imagemUrl: 'https://cinemaweb.com.br/wp-content/uploads/2024/09/pessoa-wendell-pierce.jpg',
  },
  {
    id: '17',
    interprete: 'Rachael Harris',
    user: 'rachaelharris',
    instagramUrl: 'https://www.instagram.com/rachaelharris/',
    imagemUrl: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/315138_v9_bb.jpg',
  },
  {
    id: '18',
    interprete: 'David Reale',
    user: 'therealedavid',
    instagramUrl: 'https://www.instagram.com/therealedavid/',
    imagemUrl: 'https://m.media-amazon.com/images/M/MV5BNGU0MzQ2MTQtZTUyOC00MTk0LWEwMWItNWRhMTgwZDkzMmJkXkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: '19',
    interprete: 'John Pyper-Ferguson',
    user: 'johnpyperferguson_',
    instagramUrl: 'https://www.instagram.com/johnpyperferguson_/',
    imagemUrl: 'https://static.wikia.nocookie.net/suits/images/f/fb/Jack_Soloff_%285x10%29.png/revision/latest?cb=20190905035916',
  },
  {
    id: '20',
    interprete: 'Usman Ally',
    user: 'usmanally',
    instagramUrl: 'https://www.instagram.com/usmanally/',
    imagemUrl: 'https://static.wikia.nocookie.net/suits/images/5/5b/Andrew_Malik_%287x09%29.png/revision/latest/scale-to-width/360?cb=20170908112440',
  },
]

return (
  <ScrollView>
  <View style={styles.container}>
   
    {redesSociais.map((social) => (
      <View key={social.id} style={styles.card}>
        {/* Imagem do ator */}
        <Image 
          source={{ uri: social.imagemUrl }} 
          style={styles.image}
        />
        
        {/* Nome do ator e usuário com ícone do Instagram */}
        <View style={styles.userContainer}>
          <TouchableOpacity 
            style={styles.user} 
            onPress={() => abrirInstagram(social.instagramUrl)}
          >
            {/* Ícone do Instagram */}
            <Icon name="instagram" size={16} color="#E1306C" style={styles.icon} />
            <Text style={styles.username}>@{social.user}</Text>
          </TouchableOpacity>
        </View>
      </View>
    ))}
  </View>
  </ScrollView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  height:'35%',
},
card: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: 10,
  borderRadius: 8,
  marginBottom: 15,
  width: '90%',
  // Tamanho do card ajustado para ser pequeno
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 2,
},
image: {
  width: 85,
  height: 95,
  borderRadius: 20, // Tornando a imagem redonda
  marginRight: 10,
},
userContainer: {
  flexDirection: 'row',
  alignItems: 'center',
},
user: {
  flexDirection: 'row',
  alignItems: 'center',
},
icon: {
  marginRight: 5,
},
username: {
  fontSize: 14,
  color: '#000',
},
});


export default RedesSociais;
