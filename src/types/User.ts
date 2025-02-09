/**
 * User interface
 * Type pour UserLogin
 */
export interface UserLogin {
  /**
   * Email
   */
  email: string
  /**
   * Mot de passe
   */
  mot_de_passe: string
}

/**
 * User interface
 * Type pour UserCreation
 */
export interface UserCreation {
  /**
   * Email de connexion
   */
  email: string
  /**
   * Mot de passe
   */
  mot_de_passe: string
  /**
   * Confirmation du mot de passe
   */
  confirmation: string
  /**
   * Clef de sécurité (fournie par le club)
   */
  clef: string
}

/**
 * User interface
 * Type pour UserResetPassword
 */
export interface UserResetPassword {
  /*
   * Nouveau mot de passe
   */
  nouveaU_mdp: string
  /*
   * Confirmation du nouveau mot de passe
   */
  confirmation_mdp: string
}
