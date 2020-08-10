package br.com.lab.starter.model;

public class Exame {
    private String paciente;
    private String procedimentos;
    private String datacoleta;
    private String dataresultado;

    public String getPaciente() {
        return paciente;
    }

    public void setPaciente(String paciente) {
        this.paciente = paciente;
    }

    public String getProcedimentos() {
        return procedimentos;
    }

    public void setProcedimentos(String procedimentos) {
        this.procedimentos = procedimentos;
    }

    public String getDatacoleta() {
        return datacoleta;
    }

    public void setDatacoleta(String datacoleta) {
        this.datacoleta = datacoleta;
    }

    public String getDataresultado() {
        return dataresultado;
    }

    public void setDataresultado(String dataresultado) {
        this.dataresultado = dataresultado;
    }
}
