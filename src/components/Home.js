import Novel from './Novel';
import novels from '../novels';

function Home() {
	return (
		// start div
		<div className = 'Div-main' >
		<div> {
			novels.map((novel) => (
      <Novel key = {	novel.key} title = {novel.title} img = {novel.img}	/>
    ))}
    </div>


		</div >
		// end div

	)
}

export default Home;

// <div>
// {novels.map((novel) => (
// 	<Novel key = {novel.key} title = {novel.title} content = { novel.content} />
// ))}
// </div>
