const CountriesListStyles = theme => ({
  mainContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: 30,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    marginTop: 30,
    marginBottom: 20,
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
    paddingLeft:16,
    fontWeight:"800",
    color: theme.textColor.commonText,
    paddingVertical:10,
   
  },
  blueContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.textColor.mainColor,
    height: 50,
    paddingHorizontal: 11,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2FDFF',
  },
  mainView: {
    marginTop: 15,
    marginHorizontal: 16,
  },
  formView: {
    marginHorizontal: 16,
    marginTop: 23,
  },
  heading: {
    ...theme.fontSize.fontSize24,
    color: theme.textColor.commonText,
    // marginLeft: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  parentStyle: {
    marginTop: 20,
  },
  searchContainer: {
    marginHorizontal: 15,
    marginBottom: 18,
  },
  headerStyle:{
    //height:40,
    width:"100%",
    elevation:1,
    borderBottomWidth:1,
    borderBottomColor:"gray"
  },
  headerTextStyle:{
    fontSize:24,
    // elevation:2,
    // borderBottomWidth:1,
    // borderBottomColor:"gray"
  }
});

export default CountriesListStyles;
