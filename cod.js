Class Tv{

    constructor(){
        this._relacaoCanais = Array (2,5,10,8,12)
        this._canalAtivo = 5
        this._volume = 5}
    

    get canalAtivo(){
        return this._canalAtivo
    }

    set canalAtivo(canal){
        if(this._relacaoCanais.indexOf(canal)!== -1){
        this._canalAtivo = canal}
    }
  }
    let tv = new Tv()
    
    tv.canalAtivo = 12
    console.log(tv.canalAtivo)

