function App() {

const section = {
maxWidth:"1200px",
margin:"auto",
padding:"120px 40px"
}

const card = {
background:"#111827",
padding:"30px",
borderRadius:"24px",
flex:1
}

return (

<div
style={{
background:
"linear-gradient(180deg,#050816,#020617,#000)",

color:"white",

fontFamily:
"-apple-system,BlinkMacSystemFont",

minHeight:"100vh"
}}
>

{/* NAV */}

<nav
style={{
display:"flex",
justifyContent:"space-between",
padding:"35px 60px"
}}
>

<h2>Tushar</h2>

<div>

About &nbsp;&nbsp;
Experience &nbsp;&nbsp;
Projects &nbsp;&nbsp;
Contact

</div>

</nav>

{/* HERO */}

<section
style={{
height:"90vh",
display:"flex",
alignItems:"center",
justifyContent:"space-between",
padding:"0 100px"
}}
>

<div>

<p
style={{
color:"#8b5cf6",
letterSpacing:"5px"
}}
>
SOFTWARE ENGINEER • AI
</p>

<h1
style={{
fontSize:"88px",
lineHeight:"95px",
margin:"0"
}}
>
Tushar
<br/>
Poonia
</h1>

<p
style={{
color:"#cbd5e1",
fontSize:"22px",
maxWidth:"650px"
}}
>

Building scalable APIs,
ML systems and modern
digital products.

</p>

<div
style={{
marginTop:"40px"
}}
>

<a
href="/resume.pdf"
download
>

<button
style={{
padding:"18px 34px",
background:"#8b5cf6",
border:"none",
color:"white",
borderRadius:"50px"
}}
>

Download Resume

</button>

</a>

</div>

</div>

<img

src="/images/profile.jpg"

style={{

width:"420px",

height:"520px",

objectFit:"cover",

borderRadius:"40px",

boxShadow:
"0 0 80px rgba(139,92,246,.3)"

}}

></img>

</section>

{/* ABOUT */}

<section style={section}>

<p
style={{
color:"#8b5cf6"
}}
>
ABOUT
</p>

<h2
style={{
fontSize:"58px"
}}
>
3+ years building
enterprise systems
and AI products
</h2>

<p
style={{
color:"#cbd5e1",
lineHeight:"34px",
maxWidth:"800px"
}}
>

Software Product Developer
with experience at TCS.

Built 60+ APIs,
optimized large
data pipelines and
currently pursuing
MS in AI.

</p>

</section>

{/* PROJECTS */}

<section style={section}>

<h2
style={{
fontSize:"58px"
}}
>
Featured Projects
</h2>

<div
style={{
display:"flex",
gap:"24px"
}}
>

<div style={card}>

<h3>
Explainable Credit Risk
</h3>

<p>
92% accuracy
with XGBoost
and SHAP
</p>

</div>

<div style={card}>

<h3>
Disease Prediction
</h3>

<p>
95% ML accuracy
</p>

</div>

<div style={card}>

<h3>
Genetic Algorithm
</h3>

<p>
97% optimization
</p>

</div>

</div>

</section>

{/* CONTACT */}

<section
style={{
...section,
textAlign:"center"
}}
>

<h2
style={{
fontSize:"58px"
}}
>
Let's Connect
</h2>

<p
style={{
color:"#94a3b8"
}}
>

tpoonia@mail.yu.edu

</p>

</section>

<footer
style={{
padding:"40px",
textAlign:"center",
color:"#64748b"
}}
>

© 2026 Tushar Poonia

</footer>

</div>

)

}

export default App