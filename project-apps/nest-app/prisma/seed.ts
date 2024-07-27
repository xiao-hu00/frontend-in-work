import prisma from './client'
import xlsx from 'node-xlsx'


async function main() {
  const workSheetsFromFile = xlsx.parse(
    `./assets/pig1-12/第1季第1集泥坑-中英台词.xlsx`,
  )
  const list =
    workSheetsFromFile?.[0]?.data.filter((item) => item.length > 0) || []
  if (list.length > 0) {
    const title = list.splice(0, 1)?.[0]?.[0] || ''
    const dataList = list.map((item) => {
      return {
        title,
        English: item[0],
        Chinese: item[1],
      }
    })
    await prisma.peppaPig.createMany({
      data: dataList
    })
    console.log(`${title} 存入数据库完成`)
  }
  // await prisma.user.create({
  //   data: {
  //     name: 'zhangsan',
  //     email: '11122@prisma.com',
  //   },
  // })
  // await prisma.cat.create({
  //   data: {
  //     name: 'cat001',
  //     kind: 'white cat',
  //   },
  // })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    // 关闭 Prisma Client
    await prisma.$disconnect()
  })
