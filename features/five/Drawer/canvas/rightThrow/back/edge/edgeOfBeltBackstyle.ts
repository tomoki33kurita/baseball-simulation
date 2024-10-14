export const bindingOfBeltBackStyle = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  // 指根元
  ctx.beginPath()
  ctx.moveTo(321, 588) // 手口左下左
  ctx.quadraticCurveTo(287, 531, 268, 477) // 手口左上、右カーブ前
  ctx.quadraticCurveTo(258, 448, 275, 423) //
  ctx.quadraticCurveTo(298, 389, 341, 369) // 中指ハミダシ
  ctx.quadraticCurveTo(411, 340, 467, 375) // 折り返し中間
  ctx.quadraticCurveTo(500, 395, 499, 432) // 折り返し右下
  ctx.quadraticCurveTo(490, 468, 440, 476) // ラベル左六角形頂点
  ctx.quadraticCurveTo(291, 489, 291, 489) // 左側面ヘリ革合流地点下
  ctx.quadraticCurveTo(285, 478, 285, 478) // 左側面ヘリ革合流地点上 / ベルト内側直線左
  ctx.quadraticCurveTo(290, 470, 295, 473) // ベルト内側直線右
  ctx.quadraticCurveTo(371, 471, 452, 459) //
  ctx.quadraticCurveTo(475, 452, 482, 437) //
  ctx.quadraticCurveTo(488, 428, 486, 417) //
  ctx.quadraticCurveTo(470, 378, 423, 372) //
  ctx.quadraticCurveTo(380, 365, 346, 381) //
  ctx.quadraticCurveTo(316, 392, 293, 421) //
  ctx.quadraticCurveTo(271, 450, 283, 479) //
  ctx.quadraticCurveTo(319, 536, 339, 589) //
  ctx.quadraticCurveTo(330, 593, 321, 588) // スタート地点戻り
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.1
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 手窓
  ctx.moveTo(292, 490) // 手口＿左
  ctx.quadraticCurveTo(450, 477, 450, 475) // 折り返し前
  ctx.quadraticCurveTo(490, 465, 501, 435) // 折り返し
  ctx.quadraticCurveTo(500, 383, 446, 364) // 折り返し
  ctx.quadraticCurveTo(400, 343, 342, 369) // 中指中央ハミダシ
  ctx.quadraticCurveTo(296, 388, 271, 427) // 薬指＿小指の間ハミダシ
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
