import { Component } from "react";

export default class SelectPages extends Component<SearchProps>{
    changePages = (e:React.ChangeEvent<HTMLSelectElement>):void=>{
        console.log('Selectpages')
        console.log(this.props.setPages)
        if(this.props.setPages){
            console.log('selected'+parseInt(e.target.value))
            this.props.setPages(parseInt(e.target.value));
        }
    }
    render() {
        let opts = [];
        const maxPages = this.props.maxPages?this.props.maxPages:10;
        for(let i = 1; i<=maxPages;i++){
            opts.push(<option key = {i} value = {i}>{i}</option>)
        }
        return <select id="searchBy" name="searchBy" defaultValue = {3} onChange = {this.changePages}>{opts}
        </select>
    }
}
interface SearchProps{
    maxPages?:number;
    setPages:((pages: number) => void)
}