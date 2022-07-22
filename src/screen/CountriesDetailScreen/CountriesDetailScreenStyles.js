export const CountriesDetailScreenStyles = theme => ({
    mainItemView: {
      marginHorizontal: 16,
    },
    headrStyle:{
      flexDirection:"row",
      backgroundColor: theme.whiteBG,
      borderRadius: 4,
      shadowColor: theme.shadowColor,
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.5,
      height:45,
      elevation: 5,
      marginBottom:10,
      
    },
    titleStyle: {
      ...theme.fontSize.fontSize18,
      paddingLeft:5,
      fontWeight:"800",
      color: theme.textColor.commonText,
      paddingVertical:5,
    },
    backView: {
        backgroundColor: theme.whiteBG,
        width:"15%",
        marginTop: 20,
        borderRadius: 4,
        shadowColor: theme.shadowColor,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        elevation: 5,
        justifyContent:'center',
        marginBottom:20
      },
      backText:{
        ...theme.fontSize.fontSize16,
        fontWeight:'600',
        lineHeight: 22,
        color: theme.textColor.commonText,
       // textAlign:'center'
      },
    imgContainer: {
      height: 250,
      width: "100%",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#F0F0F0',
    },
    NameView: {
      marginLeft: 8,
      marginTop: 30,
    },
    titleTextStyle: {
      ...theme.fontSize.fontSize20,
      fontWeight:'600',
      lineHeight: 22,
      marginVertical:20,
      color: theme.textColor.commonText,
    },
    detailContainer: {flexDirection:'row',marginTop:10},
    DetailHeaderTextStyle: {
      ...theme.fontSize.fontSize14,
      marginRight:10,
      fontWeight:"800",
      lineHeight: 18,
      color: theme.textColor.commonText,
    },
    detailTextStyle: {
      ...theme.fontSize.fontSize14,
      lineHeight: 20,
      color: theme.textColor.secondary,
    },
    borderView:{
        backgroundColor: theme.whiteBG,
        width:"15%",
        borderRadius: 4,
        shadowColor: theme.shadowColor,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        elevation: 5,
        justifyContent:'center',
        marginBottom:20,
        marginLeft:5
    },
    borderText:{
        ...theme.fontSize.fontSize14,
        fontWeight:'500',
        lineHeight: 22,
        color: theme.textColor.commonText,
        textAlign:'center'   
    }
  });
  