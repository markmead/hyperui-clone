export default function Banner({ title, subtitle, children }) {
  return (
    <section className="py-8">
      <div className="prose mx-auto text-center prose-h1:mb-0 prose-h2:mt-4">
        <h1>{title}</h1>

        <h2>{subtitle}</h2>

        <p>{children}</p>
      </div>
    </section>
  )
}
