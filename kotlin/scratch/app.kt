import java.awt.Color
import java.awt.Dimension
import java.awt.Font
import java.awt.Graphics
import java.awt.event.ActionEvent
import java.awt.event.ActionListener
import javax.swing.JFrame
import javax.swing.JPanel
import javax.swing.SwingUtilities
import javax.swing.Timer

fun main() {
    SwingUtilities.invokeLater { createAndShowGUI() }
}

private fun createAndShowGUI() {
    val gamePanel = GamePanel(Game())

    val frame = JFrame("T-Rex Game")
    frame.defaultCloseOperation = JFrame.EXIT_ON_CLOSE
    frame.contentPane.add(gamePanel)
    frame.pack()
    frame.isVisible = true

    frame.addKeyListener(object : java.awt.event.KeyAdapter() {
        override fun keyPressed(e: java.awt.event.KeyEvent) {
            when (e.keyCode) {
                java.awt.event.KeyEvent.VK_SPACE -> gamePanel.game.jump()
            }
        }
    })

    gamePanel.game.start()
}

class Game(private val gamePanel: GamePanel) {

    private var isRunning = false
    private var score = 0
    private var obstacles = mutableListOf<Obstacle>()
    private var tRex = TRex()

    private val GRAVITY = 2
    private val OBSTACLE_CREATION_PROBABILITY = 0.2

    private val timer = Timer(30, ActionListener {
        if (isRunning) {
            update()
            gamePanel.repaint()  // Redesenha o painel do jogo
        }
    })

    fun start() {
        isRunning = true
        score = 0
        obstacles.clear()
        tRex.reset()

        timer.start()
    }

    fun jump() {
        if (tRex.isGrounded()) {
            tRex.jump()
        }
    }

    fun update() {
        tRex.update()

        // Movimenta obstáculos e verifica colisões
        val iterator = obstacles.iterator()
        while (iterator.hasNext()) {
            val obstacle = iterator.next()
            obstacle.move()

            if (obstacle.collidesWith(tRex)) {
                gameOver()
                return
            }

            if (obstacle.isOffScreen()) {
                iterator.remove()
            }
        }

        // Adiciona um novo obstáculo com probabilidade
        if (Math.random() < OBSTACLE_CREATION_PROBABILITY) {
            obstacles.add(Obstacle())
        }

        score++
    }

    fun gameOver() {
        isRunning = false
        timer.stop()
        gamePanel.displayGameOver(score)
    }

    fun getScore(): Int {
        return score
    }

    fun getObstacles(): List<Obstacle> {
        return obstacles
    }

    fun getTRex(): TRex {
        return tRex
    }

    fun getGravity(): Int {
        return GRAVITY
    }
}

class TRex {
    private var position = 0
    private var velocity = 0
    private var gravity = 2

    fun jump() {
        if (isGrounded()) {
            velocity = -30
        }
    }

    fun update() {
        velocity += gravity
        position += velocity

        if (position < 0) {
            position = 0
            velocity = 0
        }
    }

    fun isGrounded(): Boolean {
        return position == 0
    }

    fun reset() {
        position = 0
        velocity = 0
    }

    fun getPosition(): Int {
        return position
    }
}

class Obstacle {
    private var position = 800
    private var speed = -10

    fun move() {
        position += speed
    }

    fun collidesWith(tRex: TRex): Boolean {
        // Lógica de detecção de colisão simples
        val tRexPosition = tRex.getPosition()
        return tRexPosition in (position - 20)..(position + 20)
    }

    fun isOffScreen(): Boolean {
        return position < -20
    }

    fun getPosition(): Int {
        return position
    }
}

class GamePanel(val game: Game) : JPanel() {

    init {
        preferredSize = Dimension(800, 400)
        background = Color.WHITE
    }

    override fun paintComponent(g: Graphics) {
        super.paintComponent(g)

        // Desenha o T-Rex
        val tRex = game.getTRex()
        g.color = Color.BLACK
        g.fillRect(100, 300 - tRex.getPosition(), 50, 50)

        // Desenha os obstáculos
        val obstacles = game.getObstacles()
        for (obstacle in obstacles) {
            g.fillRect(obstacle.getPosition(), 300, 20, 20)
        }

        // Desenha a pontuação
        g.font = Font("Arial", Font.BOLD, 20)
        g.drawString("Score: ${game.getScore()}", 10, 20)
    }

    fun displayGameOver(score: Int) {
        val message = "Game Over. Score: $score"
        val g = graphics
        g.color = Color.RED
        g.font = Font("Arial", Font.BOLD, 30)
        g.drawString(message, width / 2 - 150, height / 2)
    }
}
